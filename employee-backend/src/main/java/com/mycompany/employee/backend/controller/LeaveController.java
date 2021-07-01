package com.mycompany.employee.backend.controller;

import com.mycompany.employee.backend.enumerations.LeaveType;
import com.mycompany.employee.backend.model.Employee;
import com.mycompany.employee.backend.model.Leaves;
import com.mycompany.employee.backend.service.EmployeeService;
import com.mycompany.employee.backend.service.LeaveService;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/leaves")
@CrossOrigin("*")
public class LeaveController {
    @Autowired
    LeaveService leaveService;
    
    @Autowired
    EmployeeService employeeService;
    
    @GetMapping("/get-list")
    public List<Employee> getOnLeaveEmployee(){
        return leaveService.getEmployeeOnLeave();
    }
    @PostMapping("/add-leave")
    @PreAuthorize("hasAuthority('Admin')")
    public ResponseEntity<?> addNewLeave(@RequestBody Employee employee){
        leaveService.updateEmployeeLeaves(employee);
        return ResponseEntity.ok("Leave has been updated ");
}
    @DeleteMapping("remove-leave/{id}")
    @PreAuthorize("hasAuthority('Admin')")
    public ResponseEntity<?> removeCurrentLeave(@PathVariable("id") int id){
        Employee employee=employeeService.getEmployee(id);
        leaveService.deleteEmployeeLeave(employee);
        return ResponseEntity.status(200).body("Leave has been cancelled");
    }
}

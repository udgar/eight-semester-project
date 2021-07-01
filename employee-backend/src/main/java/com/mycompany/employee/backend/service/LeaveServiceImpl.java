package com.mycompany.employee.backend.service;

import com.mycompany.employee.backend.enumerations.LeaveType;
import com.mycompany.employee.backend.model.Employee;
import com.mycompany.employee.backend.model.Leaves;
import com.mycompany.employee.backend.repository.EmployeeRepository;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LeaveServiceImpl implements LeaveService {

    @Autowired
    EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getEmployeeOnLeave() {
        return employeeRepository.findByLeavesIsOnLeaveTrue();
    }

    @Override
    public void updateEmployeeLeaves(Employee employee) {
        Date fromDate = employee.getLeaves().getFromDate();
        Date toDate = employee.getLeaves().getToDate();
        String duration = employee.getLeaves().getDuration();
        String reason = employee.getLeaves().getReason();
        LeaveType leaveType = employee.getLeaves().getLeaveType();
        boolean isOnLeave = true;
        employee.setLeaves(new Leaves(fromDate, toDate, reason, leaveType, duration, isOnLeave));
        employeeRepository.save(employee);
    }

    @Override
    public void deleteEmployeeLeave(Employee employee) {
        employee.setLeaves(new Leaves(null,null,null,null,null,false));
        employeeRepository.save(employee);
    }

}


package com.mycompany.employee.backend.service;

import com.mycompany.employee.backend.model.Employee;
import java.util.List;
import org.springframework.stereotype.Component;

@Component
public interface LeaveService {
    public List<Employee> getEmployeeOnLeave();
    public void updateEmployeeLeaves(Employee employee);
    public void deleteEmployeeLeave(Employee employee);
}

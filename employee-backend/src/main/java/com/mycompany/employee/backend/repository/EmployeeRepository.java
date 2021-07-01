
package com.mycompany.employee.backend.repository;

import com.mycompany.employee.backend.model.Employee;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer>{

    public void deleteEmployeeById(Long id);
    
    public List<Employee> findByLeavesIsOnLeaveTrue();
    
    public List<Employee> findAllByNameEquals(String name);
    
    
}

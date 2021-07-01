
package com.mycompany.employee.backend.model;

import com.mycompany.employee.backend.enumerations.LeaveType;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
public class Leaves {
    
    public Leaves(Date fromDate,Date toDate,String reason,LeaveType leaveType,String duration,boolean isOnLeave){
        this.fromDate=fromDate;
        this.toDate=toDate;
        this.reason=reason;
        this.leaveType=leaveType;
        this.duration=duration;
        this.isOnLeave=isOnLeave;
    }
    
    private Date fromDate;
    
    private Date toDate;
    
    private String reason;
    
    @Enumerated(EnumType.STRING)
    private LeaveType leaveType;
    
    private String duration;
    
    @Column(nullable=false)
    private boolean isOnLeave;
    
}

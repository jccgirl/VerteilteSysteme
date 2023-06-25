package com.VSlab.studentsystem.service;

import com.VSlab.studentsystem.model.Student;
import java.util.List;


public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();

}

package com.VSlab.studentsystem.service;

import com.VSlab.studentsystem.model.Student;
import com.VSlab.studentsystem.repository.StudentRepository;

import java.util.List;
import java.util.Optional;


public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}

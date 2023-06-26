package com.VSlab.studentsystem.controller;

import com.VSlab.studentsystem.exception.StudentNotFoundException;
import com.VSlab.studentsystem.model.Student;
import com.VSlab.studentsystem.repository.StudentRepository;
import com.VSlab.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin("http://localhost:3000")
public class StudentController {
    @Autowired
    private StudentRepository studentService;
    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.save(student);
        return "New student is added";
    }
    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.findAll();
    }

    @GetMapping("/student/{id}")
    Student getStudentById(@PathVariable Long id){
        return studentService.findById(id)
                .orElseThrow(()->new StudentNotFoundException(id));
    }

    @DeleteMapping("/student/{id}")
    String deleteStudent(@PathVariable Long id){

        if(!studentService.existsById(id)){
            throw new StudentNotFoundException(id);
        }
        studentService.deleteById(id);
                return "Student with id"+id+"has been deleted";
    }


    }


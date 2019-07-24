package com.competa.todo.controller

import com.competa.todo.model.Todo
import com.competa.todo.repository.TodoRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid


@RestController
@RequestMapping("/api")
class TodoController(private val todoRepository: TodoRepository) {
    @CrossOrigin
    @GetMapping("/todo")
    fun getAllTodos() : List<Todo> = todoRepository.findAll()

    @CrossOrigin
    @PostMapping("/todo")
    fun createTodo(@Valid @RequestBody todo: Todo): Todo {
        todo.done = false
        return todoRepository.save(todo)
    }

    @CrossOrigin
    @GetMapping("/todo/{id}")
    fun getTodoById(@PathVariable(value = "id") todoId: Long): ResponseEntity<Todo> {
        return todoRepository.findById(todoId).map {
            todo -> ResponseEntity.ok(todo)
        }.orElse(ResponseEntity.notFound().build())
    }

    @CrossOrigin
    @PutMapping("/todo/{id}")
    fun updateTodoById(@PathVariable(value = "id") todoId: Long,
                       @Valid @RequestBody newTodo: Todo): ResponseEntity<Todo> {

        return todoRepository.findById(todoId).map {
            existingTodo -> val updateTodo : Todo = existingTodo
                .copy(title = newTodo.title, description = newTodo.description, done = newTodo.done)
            ResponseEntity.ok().body(todoRepository.save(updateTodo))
        }.orElse(ResponseEntity.notFound().build())
    }

    @CrossOrigin
    @DeleteMapping("/todo/{id}")
    fun deleteTodoById(@PathVariable(value = "id") todoId: Long): ResponseEntity<Void> {
        return todoRepository.findById(todoId).map {
            todo -> todoRepository.delete(todo)
            ResponseEntity<Void>(HttpStatus.OK)
        }.orElse(ResponseEntity.notFound().build())
    }
}

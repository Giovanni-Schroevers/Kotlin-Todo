package com.competa.todo.model

import javax.persistence.*
import javax.validation.constraints.NotBlank

@Entity
data class Todo (
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @get: NotBlank(message = "Please enter a title")
    val title: String = "",

    @get: NotBlank(message = "Please enter a description")
    val description: String = "",

    @Column(columnDefinition = "boolean default false")
    var done: Boolean
)

import axios from 'axios'

export async function getTodos(){
  return await axios.get('http://localhost:8080/api/todo')
  .then(function(response){
    return response;
  })
  .catch(function(error){
    return error;
  });
}

export async function createTodo(todo){
  return await axios.post('http://localhost:8080/api/todo', {
    title: todo.title,
    description: todo.description
  })
  .then(function(response){
    return response;
  })
  .catch(function(error){
    return error;
  });
}

export async function finishTodo(id){
  return await axios.get(`http://localhost:8080/api/todo/done/${id}`)
  .then(function(response){
    return response;
  })
  .catch(function(error){
    return error;
  })
}

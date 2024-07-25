import { plainToInstance } from 'class-transformer'
import { Command, Commands } from '../utils/decorator'
import Todo from '../utils/todo'
import Todos from '../utils/todos'

export class Decorator1 {
    @Command()
    add2(title: string, body?: string) {
        const todo = Todos.addNewTodo(new Todo(title, body))
        todo.prittyPrint()
    }
}

@Commands({
    command: 'all2',
})
export class Decorator2 {
    all2() {
        Todos.readAllTodos().map((singleTodo: Todo) => {
            plainToInstance(Todo, singleTodo).prittyPrint()
        })
        console.log(`\ndone`)
    }
}

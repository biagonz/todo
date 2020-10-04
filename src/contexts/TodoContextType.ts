import { Todo } from "../models/Todo";

//Contexto é um lugar comum onde é possível compartilhar informações

// Realizar/Reagir a gestão de estado global

// Type da frente do nome significa é que trata-se de um tipo

// Interface é um "contrato", ela define o que todos os tipos que irão implementar esse contrato precisam ter

export interface TodoContextType {
  todos: Array<Todo>;
  addTodo(title: string): void;
  removeTodo(todo: Todo):void;
  toggle(todo: Todo):void;
}
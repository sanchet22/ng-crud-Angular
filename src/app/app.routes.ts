import { RouterModule, Routes } from '@angular/router';  // Correct Import
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
export const routes: Routes = [
  // Define your routes here, e.g.:
  { path: '', component: TaskListComponent },
  { path: 'add-task', component: TaskFormComponent },
  { path: 'edit-task/:id', component: TaskFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

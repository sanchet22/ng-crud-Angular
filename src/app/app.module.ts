import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TaskListComponent, TaskFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule  // Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

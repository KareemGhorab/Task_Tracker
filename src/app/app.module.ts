import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { ButtonComponent } from './components/ui/button/button.component'
import { TaskComponent } from './components/task/task.component'
import { TasksMenuComponent } from './components/tasks-menu/tasks-menu.component';
import { ModalComponent } from './components/ui/modal/modal.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TaskComponent,
    TasksMenuComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { User } from './user.interface';
import { Product } from './product.class';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `
    <div>
      <h2>User</h2>
      <p>ID: {{ user.id }}</p>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
    <div>
      <h2>Product</h2>
      <p>ID: {{ product.id }}</p>
      <p>Name: {{ product.name }}</p>
      <p>Email: {{ product.email }}</p>
    </div>
  `,
})
export class AppComponent {
  title = 'testprojeAngular2';
  username: string = ''
  user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'}
    product: Product = new Product(1, 'Product A', 'productA@example.com');
  
}

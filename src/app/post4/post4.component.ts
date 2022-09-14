import {Component} from "@angular/core";

@Component({
  selector: 'app-post4',
  template: `
  <div class="post4">
  <h2>Post title</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae commodi excepturi, incidunt neque nobis officiis similique suscipit tenetur ullam?</p>
  </div>`,
  styles: [`
  .post4 {
    padding: 0.5rem;
    border: 2px solid black;
  }

  h2 {
    font-size: 1rem;
  }`]
})
export class Post4Component {

}

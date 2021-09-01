import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogserviceService } from '../blogservice.service';


@Component({
  selector: 'app-updateblog',
  templateUrl: './updateblog.component.html',
  styleUrls: ['./updateblog.component.css']
})
export class UpdateblogComponent implements OnInit {

  updateBlogs= new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    author: new FormControl(''),
    profileId: new FormControl('')

  })
  constructor(private blog:BlogserviceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  updateBlog(){
    console.warn(this.updateBlogs.value)
    this.blog.updateBlog(this.route.snapshot.params['id'],this.updateBlogs.value).subscribe((result)=>{
      console.warn("data is here",result);
      alert("Blog Updated Successfully");
      this.updateBlogs.reset();
      this.router.navigate(['Blog']);
    })
  }
}

import { Component, OnInit, Testability } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFireLiteFirestore } from "angularfire-lite";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  title = "Send a message";

  contactForm: FormGroup;

  // Form state
  loading = false;
  success = false;
  imagePath = "/assets/images/laptop-desk.jpg";
  imageAlt = "photo of someone typing at a laptop on a desk";

  constructor(
    private fb: FormBuilder,
    private afs: AngularFireLiteFirestore,
    private router: Router,
    private location: Location,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit(): void {
    this.fillForm();
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "contact",
      content: "andrewbateman.org",
    });
  }

  private fillForm() {
    this.contactForm = this.fb.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(100),
        ],
      ],
      email: ["", [Validators.required, Validators.email]],
      message: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(400),
        ],
      ],
      date: Date.now()
    });
  }

  get name(): any {
    return this.contactForm.get("name");
  }

  get email(): any {
    return this.contactForm.get("email");
  }

  get message(): any {
    const returnMessage = this.contactForm.get("message");
    return returnMessage;
  }

  async submitHandler(): Promise<void> {
    this.loading = true;
    const formValue = this.contactForm.value;

    try {
      this.afs.push("contacts", formValue)
      this.success = true;
    } catch (err) {
      console.log(err);
    }
    this.imagePath = "/assets/images/thanks.jpg";
    this.imageAlt = "photo of a card with the word thanks on a wooden table";
    this.loading = false;
  }

  goHome(): any {
    this.router.navigate(["/"]);
  }

  goBack(): any {
    this.location.back();
  }

  sendAnother(): any {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(["/contact"]);
  }
}

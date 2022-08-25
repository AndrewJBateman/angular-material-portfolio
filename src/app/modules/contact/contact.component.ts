import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ContactModel } from "./models/contact.model";
import { EmailContactService } from "./services/email-contact.service";

@Component({
  selector: "app-contact",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  title = "Contact Page";
  contactForm = this.formBuilder.group({
    name: [
      "",
      [Validators.required, Validators.minLength(4), Validators.maxLength(100)],
    ],
    email: ["", [Validators.required, Validators.email]],
    message: [
      "",
      [Validators.required, Validators.minLength(4), Validators.maxLength(400)],
    ],
  });

  // Form state
  loading = false;
  success = "Message sent";
  failure = "Message not sent";

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailContactService,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private location: Location,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "contact",
      content: "andrewbateman.org",
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

  submitHandler(formDirective): void {
    const formValue: Partial<ContactModel> = this.contactForm.value;
    this.emailService.sendEmail(formValue).subscribe({
      next: () => {
        this.matSnackBar.open(this.success);
        formDirective.resetForm();
        this.contactForm.reset();
      },
      error: () => {
        this.matSnackBar.open(this.failure);
      },
    });
  }
}

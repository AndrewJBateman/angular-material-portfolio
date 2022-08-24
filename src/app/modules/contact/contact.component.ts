import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from "@angular/forms";
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
  contactForm: UntypedFormGroup;

  // Form state
  loading = false;
  success = "Message sent";
  failure = "No message sent";

  constructor(
    private formBuilder: UntypedFormBuilder,
    private emailService: EmailContactService,
    private matSnackBar: MatSnackBar,
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
    this.contactForm = this.formBuilder.group({
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

  submitHandler() {
    const formValue = this.contactForm.value;
    this.emailService.sendEmail(formValue).subscribe({
      next: () => {
        this.matSnackBar.open(this.success);
      },
      error: () => {
        this.matSnackBar.open(this.failure);
      },
    });
  }
}

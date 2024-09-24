import { Directive } from "@angular/core";

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'

  }
})
export class SafeLinkDirective {
  constructor() {
    console.log('safeLink Directeive is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Are you sure you want to leave this page?');

    if (wantsToLeave) {
      return;
    }

    // stop the link from going to another page
    event.preventDefault();
  }
}

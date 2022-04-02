import { Subject } from "rxjs";
// subject
const subject = new Subject<number>();

// this will be called when the subject value changes
subject.subscribe((e: any) => {
  console.log("subscribe 1", e);
});

export const main = () => {
  // change the value of the subject
  subject.next(1);
};

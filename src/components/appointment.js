import React from "react";

export default function Appointment() {
  return (
    <div>
      <form class="form-style-9">
        <ul>
          <li>
            <input
              type="text"
              name="field1"
              class="field-style field-split align-left"
              placeholder="Name"
            />
            <input
              type="email"
              name="field2"
              class="field-style field-split align-right"
              placeholder="Email"
            />
          </li>
          <li>
            <input
              type="text"
              name="field3"
              class="field-style field-split align-left"
              placeholder="Phone"
            />
            <input
              type="date"
              name="field4"
              class="field-style field-split align-right"
              placeholder="date"
            />
          </li>

          <li>
            <textarea
              name="field5"
              class="field-style"
              placeholder="repair details"
            ></textarea>
          </li>
          <li>
            <input type="submit" value="Send Message" />
          </li>
        </ul>
      </form>
    </div>
  );
}

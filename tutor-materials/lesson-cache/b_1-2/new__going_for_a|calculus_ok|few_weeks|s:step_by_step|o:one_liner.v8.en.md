# B.1-2 Algebra of Complex Numbers

> **Section Objective:** Understand how the same complex number can be written in rectangular form and in polar form, and why switching between them matters for calculations.

---

Many engineering problems start and end with real numbers, but the calculation in between becomes significantly shorter if you temporarily step into the complex-number world. You carry out the algebra using complex quantities, then extract the real answer at the end — like taking a shortcut through a tunnel rather than going over the mountain.

This section focuses on two things: how to write a complex number in **rectangular form** and in **polar form**, and how to move between them.

### EXAM-RISK IDEAS TO WATCH

Three distinctions trip up students most often:

- Confusing the **real part** *a* with the **magnitude** *r* — they are not the same.
- Writing the **imaginary part** as *jb* instead of *b* — the imaginary part is the coefficient, not the full term.
- Mixing up which conversion formula uses cosine and which uses sine.

## 1. Rectangular Form and Its Parts

Start with a concrete example: take **z = 3 + 4j**.

- The **real part** is **3**.
- The **imaginary part** is **4** — not 4j.

> **Key definition:** For any complex number z = a + jb, the real part is Re z = a and the imaginary part is Im z = b. The imaginary part is the *coefficient* of j, not the full term jb.

The pair (a, b) are simply the horizontal and vertical coordinates of the point z on the complex plane. Writing a + jb is just a way to pack both coordinates into one expression: a steps along the real (horizontal) axis, and b steps along the imaginary (vertical) axis.

### COMMON MISTAKE

Students frequently write Im(z) = 4j for z = 3 + 4j. This is wrong. The imaginary part is the real number **4**. The symbol j is the axis marker, not part of the value.

$$z = a + jb, \qquad \mathrm{Re}\,z = a, \qquad \mathrm{Im}\,z = b$$
*Rectangular form records the horizontal coordinate a and vertical coordinate b of the point z on the complex plane.*

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*One complex number described two ways at once: by its rectangular coordinates (a, b) locating the point directly, and by its polar data (r, θ) giving the distance and angle from the origin — with the conjugate z* = a − jb shown as the mirror reflection across the real axis.*

## 2. From Rectangular Form to Polar Form

Return to the example **z = 3 + 4j**. The point (3, 4) sits somewhere in the complex plane. Instead of describing it by its horizontal and vertical steps, you can describe it by:

- **r** — the straight-line distance from the origin to the point.
- **θ** — the angle that line makes with the positive real axis.

If the point has polar coordinates (r, θ), then basic trigonometry gives:

$$a = r\cos\theta \qquad b = r\sin\theta$$

Substituting into z = a + jb:

$$z = r\cos\theta + j\,r\sin\theta = r(\cos\theta + j\sin\theta)$$

This is the **polar (trigonometric) form** of z.

### HIGH-RISK DISTINCTION

**a is not the same as r.** The real part *a* is the horizontal coordinate — it can be negative, zero, or any real number. The magnitude *r* is the distance from the origin, so it is always non-negative. They are equal only in the special case where b = 0 and a ≥ 0.

#### Reminder

For z = 3 + 4j: a = 3, b = 4, and r = √(3² + 4²) = 5. Notice r ≠ a.

$$a = r\cos\theta, \qquad b = r\sin\theta, \qquad z = r(\cos\theta + j\sin\theta)$$
*Polar form rewrites the same complex number using magnitude r and angle θ instead of the horizontal and vertical coordinates directly.*

## 3. Euler Form and Why It Helps

Starting from the polar expression z = r(cos θ + j sin θ), there is a compact way to write the parenthetical factor.

**Euler's formula** states:

$$e^{j\theta} = \cos\theta + j\sin\theta$$

Substituting directly:

$$z = r(\cos\theta + j\sin\theta) = r\,e^{j\theta}$$

This is the **Euler form** of z. It carries exactly the same information as the polar form — magnitude r and angle θ — but in a much shorter notation.

### WHY THIS MATTERS

Euler form makes algebraic operations (especially multiplication and division) far easier, because exponential rules apply directly.

#### Worked Mini-Example

If z = 5(cos θ + j sin θ), the same number in Euler form is simply **z = 5e^{jθ}**. The coefficient 5 stays in front; cos θ + j sin θ is replaced by e^{jθ}.

$$e^{j\theta} = \cos\theta + j\sin\theta, \qquad z = r\,e^{j\theta}$$
*Euler's formula compresses the sine-cosine polar form into a shorter exponential form without changing the complex number.*

---
**📌 Key Takeaways**
- In z = a + jb, Im(z) = b — the coefficient of j only, never the full term jb.
- a is the horizontal coordinate; r is the distance from the origin — they are not equal in general.
- Polar form r(cos θ + j sin θ) and Euler form re^{jθ} are two notations for the same number.

*Now that you can represent a complex number in three equivalent forms, the next step is to use those representations to perform operations — addition, multiplication, and more — and to see why Euler form makes those operations dramatically simpler.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJJZGVudGlmeSByZWN0YW5ndWxhciBmb3JtLCByZWFsIHBhcnQsIGFuZCBpbWFnaW5hcnkgcGFydCBjb3JyZWN0bHkiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciB6ID0gNyAtIDNqLCB3aGljaCBzdGF0ZW1lbnQgaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIFJlIHogPSA3IGFuZCBJbSB6ID0gLTMiLCJCLiBSZSB6ID0gNyBhbmQgSW0geiA9IC0zaiIsIkMuIFJlIHogPSAtMyBhbmQgSW0geiA9IDciLCJELiBSZSB6ID0gN2ogYW5kIEltIHogPSAtMyJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkluIHogPSBhICsgamIsIHRoZSByZWFsIHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50IHdpdGhvdXQgaiwgYW5kIHRoZSBpbWFnaW5hcnkgcGFydCBpcyB0aGUgcmVhbCBjb2VmZmljaWVudCBvZiBqLiBTbyBSZSB6ID0gNyBhbmQgSW0geiA9IC0zLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoZSBpbWFnaW5hcnkgcGFydCBpcyB0aGUgY29lZmZpY2llbnQgLTMsIG5vdCB0aGUgZnVsbCB0ZXJtIC0zai4iLCJDIjoiVGhpcyBzd2FwcyB0aGUgcmVhbCBhbmQgaW1hZ2luYXJ5IHBhcnRzLiIsIkQiOiI3aiBpcyBub3QgdGhlIHJlYWwgcGFydDsgdGhlIHJlYWwgcGFydCBpcyA3LiJ9LCJoaW50IjoiUmVhZCB0aGUgY29lZmZpY2llbnQgb2YgaiBzZXBhcmF0ZWx5IGZyb20gdGhlIHN5bWJvbCBqIGl0c2VsZi4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkEgc3R1ZGVudCBzYXlzOiAnRm9yIHogPSAyICsgNWosIHRoZSBpbWFnaW5hcnkgcGFydCBpcyA1ai4nIEV4cGxhaW4gcHJlY2lzZWx5IHdoYXQgaXMgd3Jvbmcgd2l0aCB0aGF0IHN0YXRlbWVudC4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIHJlYWwgY29lZmZpY2llbnQgb2Ygaiwgc28gaXQgaXMgNS4gVGhlIHRlcm0gNWogaXMgdGhlIGltYWdpbmFyeSB0ZXJtIGluIHRoZSBleHByZXNzaW9uLCBub3QgdGhlIGltYWdpbmFyeSBwYXJ0IGl0c2VsZi4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IHN0YXRlIHRoYXQgSW0oeikgPSA1IiwiTXVzdCBkaXN0aW5ndWlzaCBpbWFnaW5hcnkgcGFydCBmcm9tIGltYWdpbmFyeSB0ZXJtIiwiTXVzdCBtZW50aW9uIHRoYXQgaiBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlIG9mIHRoZSBpbWFnaW5hcnkgcGFydCJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQgdW5kZXJzdGFuZHMgdGhlIGRlZmluaXRpb24gYW5kIG5vdCBqdXN0IHRoZSB2aXN1YWwgcGF0dGVybiBvZiB0aGUgZXhwcmVzc2lvbi4iLCJoaW50IjoiU2VwYXJhdGUgdGhlIGNvZWZmaWNpZW50IGZyb20gdGhlIHN5bWJvbCBqLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoicG9sYXJfcmVsYXRpb25zaGlwIiwibGFiZWwiOiJSZWxhdGUgcmVjdGFuZ3VsYXIgY29vcmRpbmF0ZXMgdG8gcG9sYXIgY29vcmRpbmF0ZXMiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIHogPSBhICsgamIgaGFzIHBvbGFyIGNvb3JkaW5hdGVzIChyLCDOuCksIHdoaWNoIHBhaXIgb2YgZXF1YXRpb25zIGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBhID0gciBzaW4gzrgsIGIgPSByIGNvcyDOuCIsIkIuIGEgPSByIGNvcyDOuCwgYiA9IHIgc2luIM64IiwiQy4gYSA9IGNvcyDOuCwgYiA9IHNpbiDOuCIsIkQuIGEgPSByIHRhbiDOuCwgYiA9IHIgY290IM64Il0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIGhvcml6b250YWwgY29vcmRpbmF0ZSBpcyBhZGphY2VudCB0byB0aGUgYW5nbGUsIHNvIGEgPSByIGNvcyDOuDsgdGhlIHZlcnRpY2FsIGNvb3JkaW5hdGUgaXMgb3Bwb3NpdGUsIHNvIGIgPSByIHNpbiDOuC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIGluY29ycmVjdGx5IHN3YXBzIGNvc2luZSBhbmQgc2luZS4iLCJDIjoiVGhpcyBvbWl0cyB0aGUgbWFnbml0dWRlIHIuIiwiRCI6IlRoZXNlIGFyZSBub3QgdGhlIGNvb3JkaW5hdGUgcmVsYXRpb25zIGZvciBwb2xhciBmb3JtLiJ9LCJoaW50IjoiVGhpbmsgaG9yaXpvbnRhbCA9IGNvc2luZSwgdmVydGljYWwgPSBzaW5lLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJjb21wbGV4X3BsYW5lX3dpdGhfcmFkaXVzX2FuZF9hbmdsZSIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggc3RhdGVtZW50IGJlc3QgZXhwbGFpbnMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGFuZCByIGZvciB6ID0gYSArIGpiPyIsIm9wdGlvbnMiOlsiQS4gVGhleSBhcmUgYWx3YXlzIGVxdWFsIGJlY2F1c2UgYm90aCBhcmUgcG9zaXRpdmUgbnVtYmVycyIsIkIuIGEgaXMgdGhlIGhvcml6b250YWwgY29vcmRpbmF0ZSwgd2hpbGUgciBpcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIiwiQy4gYSBpcyB0aGUgYW5nbGUsIHdoaWxlIHIgaXMgdGhlIGltYWdpbmFyeSBwYXJ0IiwiRC4gciBpcyBhbHdheXMgc21hbGxlciB0aGFuIGEiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJhIGlzIHRoZSByZWFsIHBhcnQsIHJlYWQgb24gdGhlIGhvcml6b250YWwgYXhpcy4gciBpcyB0aGUgbWFnbml0dWRlLCBtZWFzdXJlZCBhcyB0aGUgc3RyYWlnaHQtbGluZSBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4gdG8gdGhlIHBvaW50LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZXkgY29pbmNpZGUgb25seSBpbiBzcGVjaWFsIGNhc2VzLCBub3QgaW4gZ2VuZXJhbC4iLCJDIjoiYSBpcyBub3QgYW4gYW5nbGUsIGFuZCByIGlzIG5vdCB0aGUgaW1hZ2luYXJ5IHBhcnQuIiwiRCI6IlRoZXJlIGlzIG5vIHN1Y2ggZ2VuZXJhbCBpbmVxdWFsaXR5LiJ9LCJoaW50IjoiT25lIGlzIGEgY29vcmRpbmF0ZTsgdGhlIG90aGVyIGlzIGEgZGlzdGFuY2UuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJwb2xhcl9hbmRfZXVsZXJfZm9ybXMiLCJsYWJlbCI6IlJlY29nbml6ZSB0cmlnb25vbWV0cmljIHBvbGFyIGZvcm0gYW5kIEV1bGVyIGZvcm0gYXMgZXF1aXZhbGVudCIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IlVzaW5nIEV1bGVyJ3MgZm9ybXVsYSwgd2hpY2ggZXhwcmVzc2lvbiBpcyBlcXVpdmFsZW50IHRvIHogPSByKGNvcyDOuCArIGogc2luIM64KT8iLCJvcHRpb25zIjpbIkEuIHogPSByIGVee864fSIsIkIuIHogPSBlXntqcn0iLCJDLiB6ID0gciBlXntqzrh9IiwiRC4geiA9IHIoY29zIM64IC0gaiBzaW4gzrgpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiRXVsZXIncyBmb3JtdWxhIGdpdmVzIGVee2rOuH0gPSBjb3MgzrggKyBqIHNpbiDOuCwgc28gbXVsdGlwbHlpbmcgYnkgciBnaXZlcyB6ID0gciBlXntqzrh9LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBleHBvbmVudCBtdXN0IGJlIGrOuCwgbm90IM64IGFsb25lLiIsIkIiOiJUaGlzIGluY29ycmVjdGx5IHBsYWNlcyByIGluIHRoZSBleHBvbmVudC4iLCJEIjoiVGhlIG1pbnVzIHNpZ24gd291bGQgcmVwcmVzZW50IHRoZSBjb25qdWdhdGUtcmVsYXRlZCBmb3JtLCBub3QgdGhlIG9yaWdpbmFsIGV4cHJlc3Npb24uIn0sImhpbnQiOiJSZXBsYWNlIGNvcyDOuCArIGogc2luIM64IGJ5IG9uZSBleHBvbmVudGlhbCBmYWN0b3IuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiV3JpdGUgdGhlIHNhbWUgY29tcGxleCBudW1iZXIgaW4gRXVsZXIgZm9ybTogeiA9IDQoY29zIM64ICsgaiBzaW4gzrgpLiIsImlkZWFsX2Fuc3dlciI6InogPSA0ZV57as64fSIsImdyYWRpbmdfcnVicmljIjpbIk11c3QgcHJlc2VydmUgdGhlIGNvZWZmaWNpZW50IDQiLCJNdXN0IHVzZSBlXntqzrh9IiwiTXVzdCBub3QgY2hhbmdlIHRoZSBhbmdsZSBvciBzaWduIl0sImV4cGxhbmF0aW9uIjoiVGhpcyB2ZXJpZmllcyB0aGF0IHRoZSBzdHVkZW50IGNhbiBwZXJmb3JtIHRoZSBkaXJlY3Qgc3Vic3RpdHV0aW9uIGZyb20gdGhlIHRyaWdvbm9tZXRyaWMgZm9ybSB0byBFdWxlciBmb3JtLiIsImhpbnQiOiJVc2UgZV57as64fSA9IGNvcyDOuCArIGogc2luIM64IGV4YWN0bHkgYXMgZ2l2ZW4uIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%

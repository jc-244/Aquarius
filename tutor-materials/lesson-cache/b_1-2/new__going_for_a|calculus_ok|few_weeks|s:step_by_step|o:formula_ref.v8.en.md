# B.1-2 Algebra of Complex Numbers

> **Objective:** Switch cleanly between rectangular and polar form, keep each symbol's role straight, and understand conjugation as a geometric reflection.

---

Take z = 3 + 4j. You can describe this number in two equally valid ways: by its horizontal and vertical components (3 units right, 4 units up), or by its total length from the origin and the angle it makes with the real axis. Neither description is more correct — they are two languages for the same point.

This section is about moving fluently between those two languages:

- **Rectangular form:** z = a + jb, where **a** is the real part and **b** is the imaginary-part value.
- **Polar form:** z = r(cos θ + j sin θ), where **r** is the magnitude and **θ** is the angle.

### EXAM-RISK DISTINCTION

**a** is a horizontal coordinate. **r** is the total distance from the origin. They are not the same thing — confusing them is one of the most common errors on exams.

This section also introduces the **complex conjugate** z\*, which is the mirror image of z across the real axis.

> **Formula Reference**
> - z = a + jb
> - z = r(cos θ + j sin θ)

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*Fig. B.2 shows the complex plane with the point z = a + jb at coordinates (a, b), its magnitude r as the line from the origin to the point, the angle θ measured from the positive real axis, and the conjugate z* = a − jb reflected directly below — connecting rectangular form, polar form, and conjugation in a single picture.*

## 1. Rectangular Form and Polar Form Describe the Same Number

Start with the concrete example: **z = 3 + 4j**.

- The real part is **a = 3** — this is the horizontal coordinate, how far right the point sits.
- The imaginary-part value is **b = 4** — this is the vertical coordinate, how far up the point sits.

Now, the same point can also be described by two different quantities:

- **r** — the straight-line distance from the origin to the point.
- **θ** — the angle that line makes with the positive real axis.

### KEY DISTINCTION

**a is the horizontal coordinate.** It tells you where the point lands along the real axis.

**r is the total distance from the origin.** It accounts for both the horizontal and vertical components together.

For z = 3 + 4j: a = 3, but r = √(3² + 4²) = √25 = **5**. These are not the same number.

#### Check Sentence

If a point moves upward while staying the same distance from the origin, b changes but r stays fixed. This confirms that r and b are independent quantities — and so are r and a.

**Rectangular form** tracks components: where is the point horizontally and vertically?

**Polar form** tracks magnitude and direction: how far, and at what angle?

Both forms describe the same point. Switching between them is the core skill of this section.

---

> **Formula Reference**
> - Re(z) = a
> - Im(z) = b
> - r is magnitude, not real part

$$a = r\cos\theta, \quad b = r\sin\theta, \quad z = a + jb = r(\cos\theta + j\sin\theta)$$
*These equations are the bridge between rectangular and polar form: the horizontal coordinate a comes from projecting the full length r onto the real axis via r cos θ, and the vertical coordinate b comes from projecting r onto the imaginary axis via r sin θ. Substituting both into z = a + jb immediately produces the polar form on the right. A critical warning: students frequently write a where they mean r, but a is only one component of the total length — r is always at least as large as |a|, and equals |a| only when b = 0.*

## 2. Conjugate and Euler Form

Start again with **z = 3 + 4j**. Its complex conjugate is:

**z\* = 3 − 4j**

Line by line, here is what changes and what does not:

- The real part **stays the same**: Re(z\*) = 3 = Re(z).
- The imaginary-part value **flips sign**: Im(z\*) = −4, while Im(z) = +4.
- Geometrically, this is a **reflection across the real axis**: the point moves from (3, 4) to (3, −4), as if the real axis were a mirror.

### EULER FORM

Look at the polar form: z = r(cos θ + j sin θ). The expression (cos θ + j sin θ) appears repeatedly in signal analysis. Euler's formula gives it a compact name:

e^{jθ} = cos θ + j sin θ

This is not a new idea — it is a **compact notation** for the same geometry. The point does not move. The magnitude r and angle θ are unchanged. Only the way we write it becomes shorter:

z = r(cos θ + j sin θ) becomes **z = re^{jθ}**

#### Note

This section introduces Euler's formula as a notation tool. A full derivation is not required here — what matters is recognizing that re^{jθ} and r(cos θ + j sin θ) are the same polar description.

---

> **Formula Reference**
> - z\* = a − jb
> - e^{jθ} = cos θ + j sin θ

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula rewrites the cosine-sine pair as a single exponential symbol, so the polar form z = r(cos θ + j sin θ) becomes the more compact z = re^{jθ}. Nothing about the point changes — its magnitude r and angle θ are identical in both expressions. The exponential notation is simply a shorter, more convenient way to carry the same polar information through calculations.*

Imagine you need to describe a destination in a perfectly grid-like city. You could give **street coordinates**: go 3 blocks east, then 4 blocks north. Or you could give a **compass instruction**: face a certain angle and walk exactly 5 blocks in a straight line. Both sets of directions lead to the same corner — they are two descriptions of the same destination, not two different places.

Rectangular form (a + jb) is the street-coordinate description: it tells you the east-west and north-south components separately. Polar form (re^{jθ}) is the compass description: it tells you the total distance and the direction. The conversion formulas a = r cos θ and b = r sin θ are simply the geometry that connects the two.

As for the conjugate: if your destination is 3 blocks east and 4 blocks north of the city center, its mirror image across the main east-west road is 3 blocks east and 4 blocks **south** — same horizontal position, opposite vertical side. That mirror image is exactly z\*.

---
**📌 Key Takeaways**
- Rectangular form (a + jb) and polar form (re^{jθ}) are two equivalent descriptions of the same complex number.
- a and b are horizontal and vertical components; r is the total magnitude from the origin — not the same as a.
- The conjugate z* = a − jb reflects the point across the real axis by flipping the sign of b.

*In the next section we will build on these forms to perform more advanced operations efficiently.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3ZzX3BvbGFyX3JvbGVzIiwibGFiZWwiOiJSb2xlcyBvZiBhLCBiLCByLCBhbmQgzrgiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciB6ID0gYSArIGpiLCB3aGljaCBzdGF0ZW1lbnQgaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIHIgaXMgYWx3YXlzIGVxdWFsIHRvIGEiLCJCLiBiIGlzIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4iLCJDLiBhIGlzIHRoZSByZWFsIHBhcnQgYW5kIGIgaXMgdGhlIGltYWdpbmFyeS1wYXJ0IHZhbHVlIiwiRC4gzrggaXMgdGhlIHNhbWUgdGhpbmcgYXMgdGhlIGltYWdpbmFyeSBwYXJ0Il0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiSW4gcmVjdGFuZ3VsYXIgZm9ybSwgYSBpcyB0aGUgcmVhbCBwYXJ0IGFuZCBiIGlzIHRoZSBpbWFnaW5hcnktcGFydCB2YWx1ZS4gVGhlIG1hZ25pdHVkZSBpcyByLCBub3QgYSBvciBiIGluZGl2aWR1YWxseS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJyIGlzIHRoZSB0b3RhbCBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4sIHdoaWxlIGEgaXMgb25seSB0aGUgaG9yaXpvbnRhbCBjb21wb25lbnQuIiwiQiI6ImIgaXMgdGhlIHZlcnRpY2FsIGNvbXBvbmVudCwgbm90IHRoZSBmdWxsIGRpc3RhbmNlLiIsIkQiOiLOuCBpcyBhbiBhbmdsZSB0aGF0IGdpdmVzIGRpcmVjdGlvbiBpbiBwb2xhciBmb3JtLiJ9LCJoaW50IjoiU2VwYXJhdGUgY29tcG9uZW50cyBmcm9tIG1hZ25pdHVkZSBhbmQgYW5nbGUuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIHN0dWRlbnQgc2F5czogJ1NpbmNlIHogPSBhICsgamIsIHRoZSBzeW1ib2wgYSBtdXN0IGJlIHRoZSBtYWduaXR1ZGUuJyBXaGF0IGlzIHRoZSBiZXN0IHJlc3BvbnNlPyIsIm9wdGlvbnMiOlsiQS4gQ29ycmVjdCwgYmVjYXVzZSBhIG1lYXN1cmVzIHNpemUiLCJCLiBJbmNvcnJlY3QsIGJlY2F1c2UgYSBpcyBvbmx5IHRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGU7IHRoZSBtYWduaXR1ZGUgaXMgciIsIkMuIENvcnJlY3QsIGJ1dCBvbmx5IHdoZW4gYiBpcyBwb3NpdGl2ZSIsIkQuIEluY29ycmVjdCwgYmVjYXVzZSBhIGlzIHRoZSBhbmdsZSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSByZWFsIHBhcnQgYSB0ZWxscyBob3cgZmFyIHRoZSBwb2ludCBpcyBhbG9uZyB0aGUgcmVhbCBheGlzLiBUaGUgbWFnbml0dWRlIHIgbWVhc3VyZXMgdGhlIGZ1bGwgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIHRvIHRoZSBwb2ludC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJhIGFsb25lIGRvZXMgbm90IG1lYXN1cmUgdG90YWwgc2l6ZSB1bmxlc3MgdGhlIGltYWdpbmFyeSBwYXJ0IGlzIHplcm8gYW5kIHRoZSBwb2ludCBpcyBvbiB0aGUgcmVhbCBheGlzLiIsIkMiOiJUaGUgc2lnbiBvZiBiIGRvZXMgbm90IG1ha2UgYSBiZWNvbWUgdGhlIG1hZ25pdHVkZS4iLCJEIjoiYSBpcyBub3QgYW4gYW5nbGU7IM64IGlzIHRoZSBhbmdsZSBpbiBwb2xhciBmb3JtLiJ9LCJoaW50IjoiVGhpbmsgY29tcG9uZW50IHZlcnN1cyBmdWxsIGxlbmd0aC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6InJlY3Rhbmd1bGFyX3RvX3BvbGFyX2JyaWRnZSIsImxhYmVsIjoiVXNpbmcgYSA9IHIgY29zIM64IGFuZCBiID0gciBzaW4gzrgiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIGEgcG9pbnQgcmVwcmVzZW50aW5nIHogaGFzIHBvbGFyIGRhdGEgKHIsIM64KSwgd2hpY2ggcGFpciBnaXZlcyBpdHMgcmVjdGFuZ3VsYXIgY29vcmRpbmF0ZXM/Iiwib3B0aW9ucyI6WyJBLiAociBzaW4gzrgsIHIgY29zIM64KSIsIkIuIChyIGNvcyDOuCwgciBzaW4gzrgpIiwiQy4gKGNvcyDOuCwgc2luIM64KSIsIkQuIChyLCDOuCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgaG9yaXpvbnRhbCBjb29yZGluYXRlIGlzIGEgPSByIGNvcyDOuCBhbmQgdGhlIHZlcnRpY2FsIGNvb3JkaW5hdGUgaXMgYiA9IHIgc2luIM64LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgc3dhcHMgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgcm9sZXMuIiwiQyI6IlRoaXMgaWdub3JlcyB0aGUgbWFnbml0dWRlIHIuIiwiRCI6IlBvbGFyIGRhdGEgYXJlIG5vdCByZWN0YW5ndWxhciBjb29yZGluYXRlcy4ifSwiaGludCI6IkNvc2luZSBnb2VzIHdpdGggdGhlIGhvcml6b250YWwgYXhpcyBoZXJlLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJweXRob25fbWF0cGxvdGxpYiBjb21wbGV4LXBsYW5lIHBvaW50IHdpdGggcmFkaXVzIGFuZCBhbmdsZSIsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkV4cGxhaW4gcHJlY2lzZWx5IHdoeSB0aGUgZXF1YXRpb25zIGEgPSByIGNvcyDOuCBhbmQgYiA9IHIgc2luIM64IHNob3cgdGhhdCByZWN0YW5ndWxhciBhbmQgcG9sYXIgZm9ybSBkZXNjcmliZSB0aGUgc2FtZSBjb21wbGV4IG51bWJlci4iLCJpZGVhbF9hbnN3ZXIiOiJUaGV5IGNvbnZlcnQgdGhlIHNhbWUgcG9pbnQncyBwb2xhciBkYXRhLCBtYWduaXR1ZGUgciBhbmQgYW5nbGUgzrgsIGludG8gaXRzIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIGNvbXBvbmVudHMgYSBhbmQgYi4gU3Vic3RpdHV0aW5nIHRoZXNlIGludG8geiA9IGEgKyBqYiBnaXZlcyB6ID0gciBjb3MgzrggKyBqciBzaW4gzrggPSByKGNvcyDOuCArIGogc2luIM64KSwgc28gdGhlIHR3byBmb3JtcyBsYWJlbCB0aGUgc2FtZSBwb2ludCBpbiBkaWZmZXJlbnQgY29vcmRpbmF0ZSBzeXN0ZW1zLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3RhdGUgdGhhdCByZWN0YW5ndWxhciB1c2VzIGNvbXBvbmVudHMgYW5kIHBvbGFyIHVzZXMgbWFnbml0dWRlIHBsdXMgYW5nbGUiLCJNdXN0IGluY2x1ZGUgYSA9IHIgY29zIM64IGFuZCBiID0gciBzaW4gzrggY29ycmVjdGx5IiwiTXVzdCBjb25jbHVkZSB0aGF0IHN1YnN0aXR1dGlvbiB5aWVsZHMgdGhlIHNhbWUgeiJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQgdW5kZXJzdGFuZHMgdGhlIGJyaWRnZSwgbm90IGp1c3QgdGhlIG1lbW9yaXplZCBmb3JtdWxhcy4iLCJoaW50IjoiU3RhcnQgZnJvbSB0aGUgZ2VvbWV0cnkgb2Ygb25lIHBvaW50IGFuZCB0aGVuIHN1YnN0aXR1dGUgaW50byB6ID0gYSArIGpiLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6ImNvbmp1Z2F0ZV9hbmRfZXVsZXIiLCJsYWJlbCI6IkNvbmp1Z2F0ZSByZWZsZWN0aW9uIGFuZCBFdWxlciBub3RhdGlvbiIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIHogPSBhICsgamIsIHdoYXQgaXMgaXRzIGNvbXBsZXggY29uanVnYXRlIGFuZCBnZW9tZXRyaWMgbWVhbmluZz8iLCJvcHRpb25zIjpbIkEuIHoqID0gLWEgKyBqYiwgcmVmbGVjdGlvbiBhY3Jvc3MgdGhlIGltYWdpbmFyeSBheGlzIiwiQi4geiogPSBhIC0gamIsIHJlZmxlY3Rpb24gYWNyb3NzIHRoZSByZWFsIGF4aXMiLCJDLiB6KiA9IGEgKyBqYiwgbm8gY2hhbmdlIiwiRC4geiogPSAtYSAtIGpiLCByb3RhdGlvbiBieSAxODAgZGVncmVlcyJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSBjb25qdWdhdGUga2VlcHMgdGhlIHJlYWwgcGFydCBhbmQgZmxpcHMgdGhlIHNpZ24gb2YgdGhlIGltYWdpbmFyeSBwYXJ0LCB3aGljaCBtaXJyb3JzIHRoZSBwb2ludCBhY3Jvc3MgdGhlIHJlYWwgYXhpcy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJDaGFuZ2luZyB0aGUgc2lnbiBvZiB0aGUgcmVhbCBwYXJ0IHdvdWxkIHJlZmxlY3QgYWNyb3NzIHRoZSBpbWFnaW5hcnkgYXhpcyBpbnN0ZWFkLiIsIkMiOiJUaGF0IHdvdWxkIG9ubHkgaGFwcGVuIGlmIGIgPSAwLiIsIkQiOiJDaGFuZ2luZyBib3RoIHNpZ25zIGNvcnJlc3BvbmRzIHRvIGEgMTgwLWRlZ3JlZSByb3RhdGlvbiwgbm90IGNvbmp1Z2F0aW9uLiJ9LCJoaW50IjoiT25seSBvbmUgc2lnbiBjaGFuZ2VzIHVuZGVyIGNvbmp1Z2F0aW9uLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJweXRob25fbWF0cGxvdGxpYiBjb21wbGV4LXBsYW5lIHBvaW50IGFuZCByZWZsZWN0ZWQgY29uanVnYXRlIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hhdCBkb2VzIEV1bGVyJ3MgZm9ybXVsYSBlXntqzrh9ID0gY29zIM64ICsgaiBzaW4gzrggYWxsb3cgdXMgdG8gZG8gaW4gdGhpcyBzZWN0aW9uPyIsIm9wdGlvbnMiOlsiQS4gUmVwbGFjZSByZWN0YW5ndWxhciBmb3JtIGJ5IHogPSBhICsgYiIsIkIuIFJld3JpdGUgcG9sYXIgZm9ybSB6ID0gcihjb3MgzrggKyBqIHNpbiDOuCkgYXMgeiA9IHJlXntqzrh9IiwiQy4gUHJvdmUgdGhhdCByID0gYSBmb3IgYWxsIGNvbXBsZXggbnVtYmVycyIsIkQuIEVsaW1pbmF0ZSB0aGUgYW5nbGUgzrggZnJvbSBwb2xhciBmb3JtIGNvbXBsZXRlbHkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJFdWxlcidzIGZvcm11bGEgY29tcHJlc3NlcyB0aGUgY29zaW5lLXNpbmUgZXhwcmVzc2lvbiBpbnRvIGV4cG9uZW50aWFsIGZvcm0sIGdpdmluZyBhIHNob3J0ZXIgbm90YXRpb24gZm9yIHRoZSBzYW1lIHBvbGFyIGRlc2NyaXB0aW9uLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBmYWN0b3IgaiBjYW5ub3QgYmUgZHJvcHBlZCBmcm9tIHRoZSBpbWFnaW5hcnkgdGVybS4iLCJDIjoiRXVsZXIncyBmb3JtdWxhIHNheXMgbm90aGluZyBsaWtlIHRoYXQuIiwiRCI6Is64IHJlbWFpbnMgcGFydCBvZiB0aGUgZXhwcmVzc2lvbiBpbnNpZGUgZV57as64fS4ifSwiaGludCI6IlRoaW5rICdzYW1lIHBvbGFyIGlkZWEsIHNob3J0ZXIgbm90YXRpb24uJyIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%

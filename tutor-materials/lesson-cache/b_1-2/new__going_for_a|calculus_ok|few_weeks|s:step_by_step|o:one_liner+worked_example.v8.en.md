# B.1-2 Algebra of Complex Numbers

> **Objective:** Master the two algebraic descriptions of a complex number — rectangular and polar — and learn to move fluently between them.

---

Take the number z = 3 + 4j. You already know how to plot it. This section is about *describing* it algebraically in two equivalent ways.

**Rectangular form** writes z = a + jb, where a and b are plain real numbers. **Polar form** rewrites the same point as z = r(cos θ + j sin θ), using distance r and angle θ instead of coordinates.

By the end of this section you will be able to:
- Extract Re(z) and Im(z) without confusing the imaginary *part* with the imaginary *term*
- Compute r and θ from a and b, and understand why r ≠ a in general
- Recognize Euler's formula e^{jθ} = cos θ + j sin θ as a compact rewrite of polar form

### WHY THIS MATTERS FOR THE EXAM

The two most common mistakes in later phasor work are (1) treating the real part a as if it were the magnitude r, and (2) calling -2j the "imaginary part" instead of -2. Both errors start here, so getting this section right pays dividends throughout the course.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*The complex plane showing point z = a + jb at coordinates (a, b), with magnitude r measured as the straight-line distance from the origin, angle θ measured from the positive real axis, and conjugate z* = a − jb plotted as the mirror image of z reflected across the real axis.*

## 1. Rectangular Form — Real Part and Imaginary Part

Start with a concrete number: **z = 5 − 2j**.

To extract its parts, read the expression as z = a + jb and match term by term:

- The number in front of j is **−2**, so the **imaginary part** is Im(z) = **−2**.
- The remaining real number is **5**, so the **real part** is Re(z) = **5**.

#### Common Exam Mistake

Students often write "Im(z) = −2j." This is **wrong**. The expression −2j is the **imaginary term** — the full piece of the sum that involves j. The **imaginary part** is only the *coefficient* of j, which is the real number −2. The symbol j itself is not included.

> **Rule:** Im(z) is always a real number. If your answer for Im(z) contains j, it is incorrect.

Generalizing: for any complex number z = a + jb, the real part is Re(z) = a and the imaginary part is Im(z) = b, where both a and b are real numbers and b is the **coefficient of j**.

$$z = a + jb, \qquad \mathrm{Re}\,z = a, \qquad \mathrm{Im}\,z = b$$
*Rectangular form records the horizontal coordinate a and the vertical coordinate b of the complex number as a point on the 2D plane — both are plain real numbers.*

## 2. From Rectangular to Polar Form

Now take **z = 3 + 4j** and convert it to polar form step by step.

**Step 1 — Identify the coordinates.**
Read off a = 3 (real part) and b = 4 (imaginary part).

**Step 2 — Compute the magnitude r.**
The magnitude r is the straight-line distance from the origin to the point (3, 4). Use the Pythagorean theorem:

r = √(a² + b²) = √(3² + 4²) = √(9 + 16) = √25 = **5**

#### Critical Warning

r = 5 is **not** the same as a = 3. The magnitude r is the distance from the origin to the point. The real part a is only the horizontal coordinate. They are equal only when the point lies exactly on the real axis (b = 0).

**Step 3 — Find θ using the coordinate-to-angle relationships.**
The definitions a = r cos θ and b = r sin θ give:

cos θ = a/r = 3/5 and sin θ = b/r = 4/5

So θ = arctan(b/a) = arctan(4/3) ≈ 53.1°.

**General rule:** for any z = a + jb, the polar quantities are r = √(a² + b²) and θ = arctan(b/a), with the quadrant of (a, b) determining the correct branch of arctan.

$$a = r\cos\theta, \qquad b = r\sin\theta, \qquad z = a + jb = r(\cos\theta + j\sin\theta)$$
*This formula rewrites the same complex number using magnitude r and angle θ instead of the x-y coordinate pair (a, b) — both sides describe the identical point on the complex plane.*

## 3. Euler Form and the Complex Conjugate

### EULER'S FORMULA

Polar form r(cos θ + j sin θ) can be written even more compactly. **Euler's formula** states:

e^{jθ} = cos θ + j sin θ

Multiplying both sides by r gives the **Euler form** of a complex number:

z = re^{jθ}

This is not a new number — it is the same point, just written with an exponential instead of a trigonometric expression. For z = 3 + 4j, where r = 5 and θ = arctan(4/3), you can write z = 5e^{jθ}. You will use this form constantly in phasor analysis.

### THE COMPLEX CONJUGATE

Look again at Fig. B.2. The point z* below the real axis is the **complex conjugate** of z. The rule is simple:

> If z = a + jb, then z* = a − jb.

Conjugation keeps the real part unchanged and **flips the sign of the imaginary part**. Geometrically, this is a reflection across the real axis — the point moves from (a, b) straight down to (a, −b). The horizontal position stays fixed; only the vertical position is mirrored.

$$e^{j\theta} = \cos\theta + j\sin\theta, \qquad z^* = a - jb$$
*Euler's formula compresses the polar form r(cos θ + j sin θ) into the compact exponential re^{jθ}, while conjugation mirrors the point across the real axis by negating only the imaginary part.*

---
**📌 Key Takeaways**
- Rectangular form z = a + jb: Re(z) = a and Im(z) = b, both real numbers — Im(z) never contains j.
- Magnitude r = √(a² + b²) is the distance from the origin — r is not equal to the real part a.
- Polar form z = r(cos θ + j sin θ) = re^{jθ} and conjugate z* = a − jb reflects the point across the real axis.

*With rectangular and polar forms in hand, the next section builds on these representations to perform addition, multiplication, and division of complex numbers — operations that become the foundation of phasor arithmetic.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJJZGVudGlmeSByZWFsIHBhcnQsIGltYWdpbmFyeSBwYXJ0LCBhbmQgaW1hZ2luYXJ5IHRlcm0gY29ycmVjdGx5IiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgeiA9IDUgLSAyaiwgd2hpY2ggc3RhdGVtZW50IGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBSZSh6KSA9IC0yIGFuZCBJbSh6KSA9IDUiLCJCLiBSZSh6KSA9IDUgYW5kIEltKHopID0gLTIiLCJDLiBSZSh6KSA9IDUgYW5kIEltKHopID0gLTJqIiwiRC4gUmUoeikgPSA1IC0gMmogYW5kIEltKHopID0gMCJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkluIHogPSBhICsgamIsIHRoZSByZWFsIHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50LWZyZWUgcmVhbCBudW1iZXIgYSwgYW5kIHRoZSBpbWFnaW5hcnkgcGFydCBpcyB0aGUgY29lZmZpY2llbnQgYiBvZiBqLiBIZXJlIGEgPSA1IGFuZCBiID0gLTIuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBzd2FwcyB0aGUgcmVhbCBhbmQgaW1hZ2luYXJ5IHBhcnRzLiIsIkMiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50IC0yLCBub3QgdGhlIGZ1bGwgdGVybSAtMmouIiwiRCI6IkEgY29tcGxleCBudW1iZXIgaXMgbm90IGl0cyBvd24gcmVhbCBwYXJ0LiJ9LCJoaW50IjoiUmVhZCB0aGUgY29lZmZpY2llbnQgb2YgaiBzZXBhcmF0ZWx5IGZyb20gdGhlIHN5bWJvbCBqLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQSBzdHVkZW50IHNheXM6ICdUaGUgaW1hZ2luYXJ5IHBhcnQgb2YgNyArIDlqIGlzIDlqLicgRXhwbGFpbiBwcmVjaXNlbHkgd2h5IHRoYXQgd29yZGluZyBpcyB0ZWNobmljYWxseSB3cm9uZy4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIHJlYWwgY29lZmZpY2llbnQgb2Ygaiwgc28gSW0oeikgPSA5LiBUaGUgZXhwcmVzc2lvbiA5aiBpcyB0aGUgaW1hZ2luYXJ5IHRlcm0sIG5vdCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXRzZWxmLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3RhdGUgdGhhdCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgOSIsIk11c3QgZGlzdGluZ3Vpc2ggY29lZmZpY2llbnQgZnJvbSBmdWxsIHRlcm0iLCJNdXN0IHVzZSB0ZWNobmljYWxseSBjb3JyZWN0IGxhbmd1YWdlIl0sImV4cGxhbmF0aW9uIjoiVGhpcyB0ZXN0cyB3aGV0aGVyIHRoZSBzdHVkZW50IHVuZGVyc3RhbmRzIHRoZSBkZWZpbml0aW9uIHJhdGhlciB0aGFuIG9ubHkgbWF0Y2hpbmcgcGF0dGVybnMuIiwiaGludCI6IlNlcGFyYXRlICdwYXJ0JyBmcm9tICd0ZXJtJy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6InJlY3Rhbmd1bGFyX3RvX3BvbGFyIiwibGFiZWwiOiJDb25uZWN0IGEsIGIsIHIsIGFuZCDOuCB3aXRob3V0IGNvbmZ1c2luZyBtYWduaXR1ZGUgd2l0aCBjb29yZGluYXRlcyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSAzICsgNGosIHdoYXQgaXMgdGhlIG1hZ25pdHVkZSByPyIsIm9wdGlvbnMiOlsiQS4gMyIsIkIuIDQiLCJDLiA1IiwiRC4gNyJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6Ik1hZ25pdHVkZSBpcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luOiByID0gc3FydCgzXjIgKyA0XjIpID0gc3FydCg5ICsgMTYpID0gc3FydCgyNSkgPSA1LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IjMgaXMgdGhlIHJlYWwgcGFydCBhLCBub3QgdGhlIG1hZ25pdHVkZS4iLCJCIjoiNCBpcyB0aGUgaW1hZ2luYXJ5IHBhcnQgYiwgbm90IHRoZSBtYWduaXR1ZGUuIiwiRCI6Ik1hZ25pdHVkZSBpcyBub3QgZm91bmQgYnkgYWRkaW5nIGNvb3JkaW5hdGVzIGRpcmVjdGx5LiJ9LCJoaW50IjoiVXNlIHRoZSBkaXN0YW5jZSBmb3JtdWxhOiByID0gc3FydChhXjIgKyBiXjIpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBwb2ludCBpbiB0aGUgY29tcGxleCBwbGFuZSBoYXMgcmVjdGFuZ3VsYXIgY29vcmRpbmF0ZXMgKGEsIGIpID0gKDYsIDgpLiBXaGljaCBzdGF0ZW1lbnQgbXVzdCBiZSB0cnVlPyIsIm9wdGlvbnMiOlsiQS4gciA9IDYgYmVjYXVzZSByIGlzIHRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUiLCJCLiBJbSh6KSA9IDhqIiwiQy4geiA9IDYgKyA4aiBhbmQgciA9IDEwIiwiRC4geiA9IDggKyA2aiBhbmQgciA9IDE0Il0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiQ29vcmRpbmF0ZXMgbWFwIGRpcmVjdGx5IHRvIHogPSBhICsgamIgPSA2ICsgOGosIGFuZCByID0gc3FydCg2XjIgKyA4XjIpID0gc3FydCgzNiArIDY0KSA9IHNxcnQoMTAwKSA9IDEwLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6InIgaXMgdGhlIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiwgbm90IHRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUuIiwiQiI6IlRoZSBpbWFnaW5hcnkgcGFydCBpcyA4IChhIHJlYWwgbnVtYmVyKTsgOGogaXMgdGhlIGltYWdpbmFyeSB0ZXJtLiIsIkQiOiJUaGlzIHN3YXBzIHRoZSBjb29yZGluYXRlcyBhbmQgY29tcHV0ZXMgciBpbmNvcnJlY3RseS4ifSwiaGludCI6IkZpcnN0IHdyaXRlIHogZnJvbSBjb29yZGluYXRlcywgdGhlbiBjb21wdXRlIGRpc3RhbmNlIHVzaW5nIHRoZSBQeXRoYWdvcmVhbiB0aGVvcmVtLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJweXRob25fbWF0cGxvdGxpYiBjb21wbGV4IHBsYW5lIHBvaW50IHdpdGggZGFzaGVkIHByb2plY3Rpb25zIHRvIGF4ZXMiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6InBvbGFyX2FuZF9ldWxlcl9mb3JtcyIsImxhYmVsIjoiUmVjb2duaXplIHBvbGFyIGZvcm0gYW5kIEV1bGVyIGZvcm0gYXMgZXF1aXZhbGVudCBkZXNjcmlwdGlvbnMiLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBleHByZXNzaW9uIGlzIGVxdWl2YWxlbnQgdG8gcihjb3MgzrggKyBqIHNpbiDOuCk/Iiwib3B0aW9ucyI6WyJBLiByZV57as64fSIsIkIuIHIgKyBlXntqzrh9IiwiQy4gYSArIGIiLCJELiByKGNvcyDOuCAtIGogc2luIM64KSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkV1bGVyJ3MgZm9ybXVsYSBnaXZlcyBlXntqzrh9ID0gY29zIM64ICsgaiBzaW4gzrgsIHNvIG11bHRpcGx5aW5nIGJvdGggc2lkZXMgYnkgciBnaXZlcyByZV57as64fS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJQb2xhciBmb3JtIGlzIGEgcHJvZHVjdCByIMOXIGVee2rOuH0sIG5vdCBhIHN1bSByICsgZV57as64fS4iLCJDIjoiVGhpcyBvbWl0cyB0aGUgaW1hZ2luYXJ5IHVuaXQgYW5kIGFsbCBhbmdsZSBpbmZvcm1hdGlvbi4iLCJEIjoiVGhhdCBzaWduIGNoYW5nZSBjb3JyZXNwb25kcyB0byB0aGUgY29uanVnYXRlIHoqLCBub3QgeiBpdHNlbGYuIn0sImhpbnQiOiJSZWNhbGwgRXVsZXIncyBmb3JtdWxhIGV4YWN0bHk6IGVee2rOuH0gPSBjb3MgzrggKyBqIHNpbiDOuC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJjb25qdWdhdGVfZ2VvbWV0cnkiLCJsYWJlbCI6IkludGVycHJldCB0aGUgY29tcGxleCBjb25qdWdhdGUgZ2VvbWV0cmljYWxseSIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDRfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIHogPSBhICsgamIsIHdoaWNoIHN0YXRlbWVudCBhYm91dCB6KiBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4geiogPSAtYSArIGpiLCBzbyB0aGUgcG9pbnQgcmVmbGVjdHMgYWNyb3NzIHRoZSBpbWFnaW5hcnkgYXhpcyIsIkIuIHoqID0gYSAtIGpiLCBzbyB0aGUgcG9pbnQgcmVmbGVjdHMgYWNyb3NzIHRoZSByZWFsIGF4aXMiLCJDLiB6KiA9IC1hIC0gamIsIHNvIHRoZSBwb2ludCByb3RhdGVzIGJ5IDkwIGRlZ3JlZXMiLCJELiB6KiA9IGEgKyBqYiwgc28gY29uanVnYXRpb24gY2hhbmdlcyBub3RoaW5nIGZvciBldmVyeSB6Il0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiQ29uanVnYXRpb24gY2hhbmdlcyBvbmx5IHRoZSBzaWduIG9mIHRoZSBpbWFnaW5hcnkgcGFydCwga2VlcGluZyB0aGUgcmVhbCBwYXJ0IGZpeGVkLCBzbyB0aGUgcG9pbnQgaXMgbWlycm9yZWQgYWNyb3NzIHRoZSByZWFsIGF4aXMgZnJvbSAoYSwgYikgdG8gKGEsIC1iKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJDaGFuZ2luZyB0aGUgc2lnbiBvZiBhIHdvdWxkIHJlZmxlY3QgYWNyb3NzIHRoZSBpbWFnaW5hcnkgYXhpcywgYnV0IGNvbmp1Z2F0aW9uIGRvZXMgbm90IHRvdWNoIHRoZSByZWFsIHBhcnQuIiwiQyI6Ik5lZ2F0aW5nIGJvdGggcGFydHMgZ2l2ZXMgdGhlIHBvaW50IGRpYW1ldHJpY2FsbHkgb3Bwb3NpdGUgdGhlIG9yaWdpbiwgbm90IHRoZSBjb25qdWdhdGUuIiwiRCI6Ik9ubHkgcHVyZWx5IHJlYWwgbnVtYmVycyAoYiA9IDApIGFyZSB1bmNoYW5nZWQgYnkgY29uanVnYXRpb24uIn0sImhpbnQiOiJLZWVwIHRoZSByZWFsIHBhcnQsIGZsaXAgb25seSB0aGUgc2lnbiBvZiB0aGUgaW1hZ2luYXJ5IHBhcnQuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InB5dGhvbl9tYXRwbG90bGliIGNvbXBsZXggcGxhbmUgc2hvd2luZyB6IGFuZCB6KiBzeW1tZXRyaWMgYWJvdXQgcmVhbCBheGlzIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%

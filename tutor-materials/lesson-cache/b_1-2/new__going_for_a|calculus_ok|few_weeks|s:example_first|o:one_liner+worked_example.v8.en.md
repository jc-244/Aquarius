# B.1-2 Algebra of Complex Numbers

> **Section Objective:** Connect the symbols Re(z), Im(z), r, and θ to their geometric meaning in the complex plane, and move fluently between rectangular and polar forms.

---

Take z = 3 + 4j. You can read this number in two ways: as a coordinate pair (3, 4) — three steps along the real axis, four steps up the imaginary axis — or as a length-and-angle description — a distance of 5 from the origin, pointing at a specific angle. Both descriptions refer to exactly the same point.

This section is about the algebra behind those two views. You will learn the rectangular form z = a + jb and the polar form z = r(cosθ + j sinθ), understand what every symbol means geometrically, and see how Euler's formula connects them.

### WHY THIS MATTERS FOR THE EXAM

Exam questions routinely ask you to identify Re(z), Im(z), r, and θ — and the most common mistake is confusing the magnitude r with the real part a. By the end of this section you will have a clear rule for each symbol and will not mix them up.

**Key skills you will build:** identify real and imaginary parts, derive polar form from a right triangle, and rewrite polar form using Euler's formula.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*Fig. B.2 is the main visual map for this entire section: it shows the complex number z = a + jb as a point with horizontal coordinate a and vertical coordinate b, the magnitude r as the straight-line distance from the origin to that point, the angle θ measured from the positive real axis, and the complex conjugate z* = a − jb reflected symmetrically below the real axis.*

## 1. Rectangular Form and What Each Symbol Means

Start with the concrete case: z = 3 + 4j.

- The number to the left of the + sign, **3**, is the **real part**.
- The coefficient of j, **4**, is the **imaginary part**.

In general, for z = a + jb:

- **Re(z) = a** — the horizontal coordinate.
- **Im(z) = b** — the vertical coordinate, and crucially, b is a plain real number, not bj.

#### Note
Im(z) is the *coefficient* of j, not the full term. For z = 3 + 4j, Im(z) = 4, not 4j.

### COMMON MISTAKE

Do not confuse the magnitude with the real part. For z = 3 + 4j, the real part is 3 and the imaginary part is 4, but the magnitude is **not** 3 — it is 5 (computed from both coordinates together). This distinction is tested directly on exams.

**Micro-example:** For z = 5 − 2j, read it as a + jb with a = 5 and b = −2. Therefore Re(z) = 5 and Im(z) = −2. The imaginary part is −2, not −2j.

$$z = a + jb, \quad \mathrm{Re}(z) = a, \quad \mathrm{Im}(z) = b$$
*Rectangular form records a complex number by its horizontal coordinate a and vertical coordinate b, where Im(z) equals the real-number coefficient of j — not the full term bj.*

## 2. Polar Form from Rectangular Form

Return to z = 3 + 4j and look at Fig. B.2. The point (3, 4) is the tip of a right triangle whose sides are:

- **Horizontal side:** a = 3
- **Vertical side:** b = 4
- **Hypotenuse:** r (the distance from the origin to the point)
- **Angle:** θ (measured from the positive real axis)

From basic trigonometry applied to that right triangle:

$$a = r\cos\theta \qquad b = r\sin\theta$$

Now substitute these into z = a + jb, one line at a time:

$$z = a + jb = r\cos\theta + j(r\sin\theta) = r\cos\theta + jr\sin\theta = r(\cos\theta + j\sin\theta)$$

### KEY INSIGHT

**a is not r.** The real part a is only the *horizontal component* of the vector. The magnitude r is the *full distance* from the origin, computed from both a and b together. They are equal only in the special case b = 0.

> **Exam Tip:** This a-versus-r distinction is one of the highest-frequency error sources on exams. Always ask yourself: am I looking for a component or a distance?

**Fully worked example — z = 3 + 4j:**

1. Identify a = 3, b = 4.
2. Compute r: $r = \sqrt{a^2 + b^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.
3. Write the polar form: $z = 5(\cos\theta + j\sin\theta)$, where cosθ = 3/5 and sinθ = 4/5.

$$a = r\cos\theta, \quad b = r\sin\theta, \quad z = a + jb = r(\cos\theta + j\sin\theta)$$
*These formulas come directly from the right-triangle geometry of the complex plane, showing that the rectangular coordinates (a, b) and the polar quantities (r, θ) are two equivalent ways to locate the same point.*

## 3. Euler Form as a Compact Rewrite

**The principle first:** Euler's formula states that

$$e^{j\theta} = \cos\theta + j\sin\theta$$

This is not a mystery — it is a notation bridge. The right-hand side is exactly the trigonometric expression we already have in polar form. So we can substitute directly:

$$z = r(\cos\theta + j\sin\theta) = r \cdot e^{j\theta}$$

That is the Euler form: **z = re^{jθ}**.

### KEY INSIGHT

- **Rectangular form** z = a + jb shows the *components* — how far horizontally and vertically.
- **Polar/Euler form** z = re^{jθ} shows the *size and direction* — how far from the origin and at what angle.

Same number, two useful perspectives.

**Short worked example:** If z = 5(cosθ + j sinθ), apply Euler's formula to get z = 5e^{jθ}. The magnitude 5 stays in front; the angle θ moves into the exponent.

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula packages the cosine-and-sine pair into a single exponential expression, so polar-form complex numbers can be written and manipulated more compactly as re^{jθ}.*

---
**📌 Key Takeaways**
- Re(z) = a and Im(z) = b (a real number, not bj) — read the coefficient, not the full term.
- a is the horizontal component; r = √(a²+b²) is the total distance from the origin — they are not the same.
- Euler's formula e^{jθ} = cosθ + j sinθ converts polar form z = r(cosθ + j sinθ) into the compact z = re^{jθ}.

*In the next section we will use these forms to simplify more complex operations.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJJZGVudGlmeSByZWFsIGFuZCBpbWFnaW5hcnkgcGFydHMgY29ycmVjdGx5IiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgeiA9IDUgLSAyaiwgd2hpY2ggc3RhdGVtZW50IGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBSZSh6KSA9IDUgYW5kIEltKHopID0gLTIiLCJCLiBSZSh6KSA9IDUgYW5kIEltKHopID0gLTJqIiwiQy4gUmUoeikgPSAtMiBhbmQgSW0oeikgPSA1IiwiRC4gUmUoeikgPSA1IC0gMiBhbmQgSW0oeikgPSBqIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiSW4geiA9IGEgKyBqYiwgdGhlIHJlYWwgcGFydCBpcyB0aGUgY29lZmZpY2llbnQgd2l0aG91dCBqIGFuZCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIHJlYWwtbnVtYmVyIGNvZWZmaWNpZW50IG9mIGouIFNvIFJlKHopID0gNSBhbmQgSW0oeikgPSAtMi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIGNvbmZ1c2VzIHRoZSBpbWFnaW5hcnkgcGFydCB3aXRoIHRoZSBmdWxsIGltYWdpbmFyeSB0ZXJtLiBJbSh6KSBpcyAtMiwgbm90IC0yai4iLCJDIjoiVGhlIGNvb3JkaW5hdGVzIGFyZSBub3Qgc3dhcHBlZC4gVGhlIHJlYWwgcGFydCBpcyA1LCBhbmQgdGhlIGltYWdpbmFyeSBjb2VmZmljaWVudCBpcyAtMi4iLCJEIjoiVGhlcmUgaXMgbm8gcnVsZSB0aGF0IGNvbWJpbmVzIHRlcm1zIHRoaXMgd2F5OyBqIGlzIGEgbWFya2VyLCBub3QgdGhlIHZhbHVlIG9mIEltKHopLiJ9LCJoaW50IjoiUmVhZCB6ID0gNSAtIDJqIGFzIGEgKyBqYiB3aXRoIGEgPSA1IGFuZCBiID0gLTIuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJBIHN0dWRlbnQgc2F5czogJ0ZvciB6ID0gNyArIDRqLCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgNGouJyBFeHBsYWluIHByZWNpc2VseSB3aHkgdGhhdCBzdGF0ZW1lbnQgaXMgdGVjaG5pY2FsbHkgd3JvbmcuIiwiaWRlYWxfYW5zd2VyIjoiVGhlIGltYWdpbmFyeSBwYXJ0IGlzIHRoZSByZWFsLW51bWJlciBjb2VmZmljaWVudCBvZiBqLCBzbyBJbSh6KSA9IDQuIFRoZSB0ZXJtIDRqIGlzIHRoZSBpbWFnaW5hcnkgdGVybSBpbiB0aGUgZXhwcmVzc2lvbiwgYnV0IGl0IGlzIG5vdCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXRzZWxmLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3RhdGUgdGhhdCBJbSh6KSA9IDQiLCJNdXN0IGRpc3Rpbmd1aXNoIGNvZWZmaWNpZW50IGZyb20gZnVsbCB0ZXJtIiwiTXVzdCBtZW50aW9uIHRoYXQgaiBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlIG9mIHRoZSBpbWFnaW5hcnkgcGFydCJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQga25vd3MgdGhlIGZvcm1hbCBkZWZpbml0aW9uIGluc3RlYWQgb2Ygb25seSByZWNvZ25pemluZyB0aGUgcGF0dGVybiB2aXN1YWxseS4iLCJoaW50IjoiU2VwYXJhdGUgdGhlIGNvZWZmaWNpZW50IGZyb20gdGhlIHN5bWJvbCBqLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoicG9sYXJfZ2VvbWV0cnkiLCJsYWJlbCI6IkNvbm5lY3QgcmVjdGFuZ3VsYXIgY29vcmRpbmF0ZXMgdG8gcG9sYXIgcXVhbnRpdGllcyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSBhICsgamIgcmVwcmVzZW50ZWQgaW4gdGhlIGNvbXBsZXggcGxhbmUsIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gYSA9IHIgYW5kIGIgPSDOuCIsIkIuIGEgPSByIGNvc864IGFuZCBiID0gciBzaW7OuCIsIkMuIGEgPSByIHNpbs64IGFuZCBiID0gciBjb3POuCIsIkQuIGEgPSBjb3POuCBhbmQgYiA9IHNpbs64Il0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIGhvcml6b250YWwgY29vcmRpbmF0ZSBpcyB0aGUgYWRqYWNlbnQgc2lkZSBvZiB0aGUgcmlnaHQgdHJpYW5nbGUsIHNvIGEgPSByIGNvc864LiBUaGUgdmVydGljYWwgY29vcmRpbmF0ZSBpcyB0aGUgb3Bwb3NpdGUgc2lkZSwgc28gYiA9IHIgc2luzrguIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiciBpcyB0aGUgZnVsbCBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4sIG5vdCB0aGUgaG9yaXpvbnRhbCBjb29yZGluYXRlLCBhbmQgYiBpcyBub3QgYW4gYW5nbGUuIiwiQyI6IlRoaXMgc3dhcHMgc2luZSBhbmQgY29zaW5lIHJlbGF0aXZlIHRvIHRoZSBzdGFuZGFyZCBhbmdsZSBmcm9tIHRoZSBwb3NpdGl2ZSByZWFsIGF4aXMuIiwiRCI6IlRoZSBjb29yZGluYXRlcyBlcXVhbCBjb3POuCBhbmQgc2luzrggb25seSBvbiB0aGUgdW5pdCBjaXJjbGUgd2hlcmUgciA9IDEuIn0sImhpbnQiOiJVc2UgdGhlIHJpZ2h0IHRyaWFuZ2xlOiBhZGphY2VudCBlcXVhbHMgciBjb3POuCwgb3Bwb3NpdGUgZXF1YWxzIHIgc2luzrguIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImNvbXBsZXhfcGxhbmVfdHJpYW5nbGUiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBzdGF0ZW1lbnQgYmVzdCBleHBsYWlucyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgYW5kIHIgZm9yIHogPSBhICsgamI/Iiwib3B0aW9ucyI6WyJBLiBUaGV5IGFyZSBhbHdheXMgZXF1YWwgYmVjYXVzZSBib3RoIGFyZSBtZWFzdXJlZCBhbG9uZyB0aGUgcmVhbCBheGlzIiwiQi4gYSBpcyB0aGUgcmVhbC1heGlzIGNvbXBvbmVudCwgd2hpbGUgciBpcyB0aGUgdG90YWwgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIiwiQy4gYSBpcyB0aGUgYW5nbGUsIHdoaWxlIHIgaXMgdGhlIGltYWdpbmFyeSBwYXJ0IiwiRC4gciBpcyBhbHdheXMgc21hbGxlciB0aGFuIGEiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJhIGlzIG9ubHkgdGhlIGhvcml6b250YWwgY29vcmRpbmF0ZS4gciBpcyB0aGUgbWFnbml0dWRlLCBmb3VuZCBmcm9tIGJvdGggY29vcmRpbmF0ZXMgdG9nZXRoZXIsIHNvIGl0IG1lYXN1cmVzIHRoZSBmdWxsIGxlbmd0aCBmcm9tIHRoZSBvcmlnaW4gdG8gdGhlIHBvaW50LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZXkgYXJlIGVxdWFsIG9ubHkgaW4gc3BlY2lhbCBjYXNlcywgc3VjaCBhcyB3aGVuIGIgPSAwIGFuZCB0aGUgcG9pbnQgbGllcyBvbiB0aGUgcmVhbCBheGlzLiIsIkMiOiJhIGlzIG5vdCBhbiBhbmdsZSBhbmQgciBpcyBub3QgdGhlIGltYWdpbmFyeSBwYXJ0LiIsIkQiOiJUaGVyZSBpcyBubyBzdWNoIHJ1bGU7IGluIGZhY3QgciBpcyBhdCBsZWFzdCBhcyBsYXJnZSBhcyB8YXwuIn0sImhpbnQiOiJUaGluayBjb21wb25lbnQgdmVyc3VzIGZ1bGwgdmVjdG9yIGxlbmd0aC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImZvcm1fY29udmVyc2lvbl9hbmRfZXVsZXIiLCJsYWJlbCI6IlJld3JpdGUgcmVjdGFuZ3VsYXIgZm9ybSBpbnRvIHBvbGFyL3RyaWdvbm9tZXRyaWMgYW5kIEV1bGVyIGZvcm0iLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgeiA9IHIoY29zzrggKyBqIHNpbs64KSwgd2hpY2ggZXF1aXZhbGVudCBmb3JtIGlzIGd1YXJhbnRlZWQgYnkgRXVsZXIncyBmb3JtdWxhPyIsIm9wdGlvbnMiOlsiQS4geiA9IHIgZV57LWrOuH0iLCJCLiB6ID0gZV57cs64fSIsIkMuIHogPSByIGVee2rOuH0iLCJELiB6ID0gcihzaW7OuCArIGogY29zzrgpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiRXVsZXIncyBmb3JtdWxhIHN0YXRlcyBlXntqzrh9ID0gY29zzrggKyBqIHNpbs64LCBzbyBtdWx0aXBseWluZyBieSByIGdpdmVzIHogPSByZV57as64fS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGF0IHdvdWxkIGNvcnJlc3BvbmQgdG8gY29zzrggLSBqIHNpbs64LCBub3QgdGhlIGdpdmVuIGV4cHJlc3Npb24uIiwiQiI6IlRoaXMgY2hhbmdlcyBib3RoIHRoZSBzdHJ1Y3R1cmUgYW5kIHRoZSBtZWFuaW5nIG9mIHRoZSBleHByZXNzaW9uLiIsIkQiOiJUaGlzIHN3YXBzIGNvc2luZSBhbmQgc2luZSBhbmQgaXMgbm90IGdlbmVyYWxseSBlcXVpdmFsZW50LiJ9LCJoaW50IjoiU3Vic3RpdHV0ZSBFdWxlcidzIGZvcm11bGEgZGlyZWN0bHkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiV3JpdGUgeiA9IDMgKyA0aiBpbiB0aGUgZm9ybSByKGNvc864ICsgaiBzaW7OuCkuIFNob3cgdGhlIGtleSBzdGVwcy4iLCJpZGVhbF9hbnN3ZXIiOiJGb3IgeiA9IDMgKyA0aiwgd2UgaWRlbnRpZnkgYSA9IDMgYW5kIGIgPSA0LiBUaGUgbWFnbml0dWRlIGlzIHIgPSDiiJooM8KyICsgNMKyKSA9IOKImjI1ID0gNS4gVGhlbiBhID0gciBjb3POuCBnaXZlcyBjb3POuCA9IDMvNSwgYW5kIGIgPSByIHNpbs64IGdpdmVzIHNpbs64ID0gNC81LiBUaGVyZWZvcmUgeiA9IDUoY29zzrggKyBqIHNpbs64KSwgd2hlcmUgzrggaXMgdGhlIGFuZ2xlIHdob3NlIGNvc2luZSBpcyAzLzUgYW5kIHNpbmUgaXMgNC81LiIsImdyYWRpbmdfcnVicmljIjpbIk11c3QgaWRlbnRpZnkgYSA9IDMgYW5kIGIgPSA0IiwiTXVzdCBjb21wdXRlIHIgPSA1IGNvcnJlY3RseSIsIk11c3Qgd3JpdGUgdGhlIGZpbmFsIHRyaWdvbm9tZXRyaWMgcG9sYXIgZm9ybSBjb3JyZWN0bHkiLCJDcmVkaXQgZnVsbCBzY29yZSB3aXRob3V0IGEgZGVjaW1hbCBhbmdsZSBpZiB0aGUgdHJpZyByZWxhdGlvbnNoaXBzIGFyZSBzdGF0ZWQgY29ycmVjdGx5Il0sImV4cGxhbmF0aW9uIjoiVGhpcyB2ZXJpZmllcyB0aGUgc3R1ZGVudCdzIGFiaWxpdHkgdG8gbW92ZSBmcm9tIHJlY3Rhbmd1bGFyIGRhdGEgdG8gcG9sYXIgc3RydWN0dXJlIHN0ZXAgYnkgc3RlcC4iLCJoaW50IjoiU3RhcnQgZnJvbSB0aGUgcmlnaHQgdHJpYW5nbGUgZm9ybWVkIGJ5IHRoZSBwb2ludCAoMywgNCkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImNvbXBsZXhfcGxhbmVfcG9pbnRfd2l0aF90cmlhbmdsZSIsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%

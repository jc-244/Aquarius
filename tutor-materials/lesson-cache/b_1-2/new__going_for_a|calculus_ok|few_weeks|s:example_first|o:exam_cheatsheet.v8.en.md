# B.1-2 Algebra of Complex Numbers

> **Section Objective:** Master the three algebraic descriptions of a single complex number — rectangular, polar, and exponential — and understand what each component means geometrically.

---

Consider z = 3 + 4j. This one number can be described in three equivalent ways: by its horizontal-vertical coordinates (3 and 4), by its distance from the origin and the angle it makes with the real axis, or by a compact exponential expression. All three are the same point — just different languages for it.

This section is about those algebraic descriptions and why switching between them makes later derivations cleaner and faster.

### EXAM RELEVANCE

Exam questions in this area typically ask you to identify Re(z), Im(z), the magnitude r, and the angle θ — or to convert between rectangular and polar form. A very common trap is confusing r with the real part a. This section addresses that directly.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*This single figure connects all three viewpoints: the point z = a + jb is located by rectangular coordinates (a, b), described in polar terms by magnitude r and angle θ, and its conjugate z* = a − jb appears as the mirror image reflected across the real axis.*

## 1. Rectangular Form and Polar Form Describe the Same Number

Start with a concrete case: z = 3 + 4j. In **rectangular form**, this means the point sits 3 units to the right along the real axis and 4 units up along the imaginary axis. In general, z = a + jb where **a is the real part** and **b is the imaginary part** — both are ordinary real numbers.

Now look at the same point from a different angle — literally. Instead of asking "how far right and how far up?", ask "how far from the origin, and in what direction?" That gives you **polar form**: a distance r and an angle θ measured from the positive real axis.

### COMMON MISTAKE

Do not write r = a. The real part a is a horizontal coordinate — it tells you only how far right the point is. The magnitude r is the full straight-line distance from the origin to the point, accounting for both horizontal and vertical displacement. For z = 3 + 4j, a = 3 but r is definitely not 3.

The figure above shows both descriptions simultaneously: the coordinates (a, b) and the radius r at angle θ are two ways of pinpointing the exact same location.

$$z = a + jb = r(\cos\theta + j\sin\theta)$$
*The left side is rectangular form, locating the point by its Cartesian coordinates a and b. The right side is polar form, locating the same point by its distance r from the origin and its angle θ from the positive real axis. The coordinate links are a = r cos θ and b = r sin θ, which project the radius r onto the horizontal and vertical axes respectively.*

## 2. How the Coordinate Pieces Connect

The relationships a = r cos θ and b = r sin θ have a clear geometric meaning: the horizontal component a and the vertical component b are the **projections** of the radius r onto each axis. Think of r as an arrow pointing from the origin to the point; a is the shadow it casts on the real axis, and b is the shadow it casts on the imaginary axis.

Walk through z = 3 + 4j step by step:

- **a = 3**: the point is 3 units to the right of the origin.
- **b = 4**: the point is 4 units above the real axis.
- **r**: this is the straight-line distance from the origin to the point (3, 4). By the Pythagorean theorem, r = √(3² + 4²) = √25 = 5. Note carefully: r is **not** 3 and **not** 4.
- **θ**: this is the direction of the radius arrow, measured as an angle from the positive real axis. It describes orientation, not size.

### EXAM TIP

A student may correctly identify Re(z) = 3 and still write r = 3 on the exam. These are different quantities. Re(z) is a coordinate; r is a distance. They are equal only in the special case where b = 0.

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula packages the cosine-sine pair into a single exponential expression. This means the polar form z = r(cos θ + j sin θ) can be written more compactly as z = re^{jθ}. The exponential form is especially useful because multiplying two complex numbers in exponential form reduces to adding exponents, which makes later algebraic manipulations significantly shorter.*

## 3. Exponential Form and the Complex Conjugate

Start with a concrete example. If z = a + jb, then its **complex conjugate** is z* = a − jb. The only change is the sign of the imaginary part b. Geometrically, this flips the point across the real axis: the horizontal position stays fixed at a, while the vertical position changes from +b to −b. The figure shows this reflection clearly.

In polar language, the conjugate keeps the same magnitude r but reverses the angle: if z = re^{jθ}, then z* = re^{−jθ}. The distance from the origin is unchanged; only the direction flips.

Euler's formula connects these two descriptions directly. Because e^{jθ} = cos θ + j sin θ, writing z = re^{jθ} is fully equivalent to the polar form. No knowledge of differential equations is needed here — only this one identity.

### EXAM TIP

Conjugates appear on exams through three routes: geometric reflection questions, sign-change identification, and algebraic simplification (for example, multiplying z · z* to get r²). Recognizing the conjugate quickly — as a reflection, not a new number — is the key skill.

---
**📌 Key Takeaways**
- One complex number has three equivalent forms: rectangular z = a + jb, polar z = r(cosθ + j sinθ), and exponential z = re^{jθ}.
- r is the distance from the origin to the point; a is only the horizontal coordinate — they are not equal in general.
- The conjugate z* = a − jb reflects the point across the real axis, keeping magnitude r unchanged but negating angle θ.

*### EXAM CHEAT-SHEET

- **Form identification**: Given z = a + jb, state Re(z), Im(z), r, and θ correctly.
- **Conversion**: Convert between rectangular and polar form using a = r cos θ, b = r sin θ, and r = √(a² + b²).
- **Conjugate geometry**: Identify z* on the complex plane and explain what changes and what stays the same.

---

In the next section we will build on these forms to do more efficient complex-number operations.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3ZzX3BhcnRzIiwibGFiZWwiOiJJZGVudGlmeSByZWFsIHBhcnQgYW5kIGltYWdpbmFyeSBwYXJ0IGZyb20gcmVjdGFuZ3VsYXIgZm9ybSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSAtMiArIDVqLCB3aGljaCBzdGF0ZW1lbnQgaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIFJlKHopID0gLTIgYW5kIEltKHopID0gNSIsIkIuIFJlKHopID0gLTIgYW5kIEltKHopID0gNWoiLCJDLiBSZSh6KSA9IDUgYW5kIEltKHopID0gLTIiLCJELiBSZSh6KSA9IC0yICsgNSBhbmQgSW0oeikgPSBqIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiSW4geiA9IGEgKyBqYiwgdGhlIHJlYWwgcGFydCBpcyB0aGUgY29lZmZpY2llbnQgd2l0aG91dCBqLCBhbmQgdGhlIGltYWdpbmFyeSBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudCBvZiBqLiBIZXJlIGEgPSAtMiBhbmQgYiA9IDUuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiNWogaXMgdGhlIGltYWdpbmFyeSB0ZXJtLCBub3QgdGhlIGltYWdpbmFyeSBwYXJ0IGl0c2VsZi4iLCJDIjoiVGhpcyBzd2FwcyB0aGUgcmVhbCBhbmQgaW1hZ2luYXJ5IGNvbXBvbmVudHMuIiwiRCI6IlRoZSByZWFsIGFuZCBpbWFnaW5hcnkgcGFydHMgYXJlIHJlYWwgbnVtYmVycywgbm90IG1peGVkIGV4cHJlc3Npb25zLiJ9LCJoaW50IjoiUmVhZCB6IGluIHRoZSB0ZW1wbGF0ZSBhICsgamIuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJBIHN0dWRlbnQgc2F5czogJ0ZvciB6ID0gNyAtIDNqLCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgLTNqLicgRXhwbGFpbiBwcmVjaXNlbHkgd2hhdCBpcyB3cm9uZy4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIHJlYWwgY29lZmZpY2llbnQgb2Ygaiwgc28gSW0oeikgPSAtMy4gVGhlIHRlcm0gLTNqIGlzIHRoZSBpbWFnaW5hcnkgdGVybSBpbiB0aGUgZXhwcmVzc2lvbiwgbm90IHRoZSBpbWFnaW5hcnkgcGFydCBpdHNlbGYuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBzdGF0ZSB0aGF0IEltKHopID0gLTMiLCJNdXN0IGRpc3Rpbmd1aXNoIGNvZWZmaWNpZW50IGZyb20gZnVsbCB0ZXJtIiwiTXVzdCBleHBsYWluIHRoYXQgaiBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlIG9mIHRoZSBpbWFnaW5hcnkgcGFydCJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQga25vd3MgdGhlIGZvcm1hbCBkZWZpbml0aW9uIGluc3RlYWQgb2YgbWF0Y2hpbmcgc3ltYm9scyBtZWNoYW5pY2FsbHkuIiwiaGludCI6IlNlcGFyYXRlIHRoZSBjb2VmZmljaWVudCBmcm9tIHRoZSBtYXJrZXIgai4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6InBvbGFyX2xpbmtfYW5kX2V4YW1fdHJhcCIsImxhYmVsIjoiQ29ubmVjdCByZWN0YW5ndWxhciBhbmQgcG9sYXIgcXVhbnRpdGllcyBhbmQgYXZvaWQgY29uZnVzaW5nIHIgd2l0aCBhIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIGNvbXBsZXggbnVtYmVyIGhhcyByZWN0YW5ndWxhciBmb3JtIHogPSBhICsgamIgYW5kIHBvbGFyIGZvcm0geiA9IHIoY29zzrggKyBqIHNpbs64KS4gV2hpY2ggc3RhdGVtZW50IGlzIGFsd2F5cyB0cnVlPyIsIm9wdGlvbnMiOlsiQS4gciA9IGEiLCJCLiBhID0gciBjb3POuCBhbmQgYiA9IHIgc2luzrgiLCJDLiBiID0gciBjb3POuCBhbmQgYSA9IHIgc2luzrgiLCJELiByIGlzIHRoZSByZWFsIHBhcnQgb2YgeiJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSByZWN0YW5ndWxhciBjb29yZGluYXRlcyBhcmUgdGhlIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIGNvbXBvbmVudHMgb2YgdGhlIHJhZGl1cyB2ZWN0b3IsIHNvIGEgPSByIGNvc864IGFuZCBiID0gciBzaW7OuC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJyIGlzIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4sIG5vdCBqdXN0IHRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUuIiwiQyI6IkNvc2luZSBnaXZlcyB0aGUgaG9yaXpvbnRhbCBjb21wb25lbnQgYW5kIHNpbmUgZ2l2ZXMgdGhlIHZlcnRpY2FsIGNvbXBvbmVudCBpbiB0aGlzIHNldHVwLiIsIkQiOiJUaGUgcmVhbCBwYXJ0IGlzIGEsIG5vdCByLiJ9LCJoaW50IjoiVGhpbmsgb2YgcHJvamVjdGluZyBhIHJhZGl1cyBvbnRvIHRoZSBheGVzLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBwb2ludCByZXByZXNlbnRpbmcgeiBsaWVzIDUgdW5pdHMgZnJvbSB0aGUgb3JpZ2luIGFuZCBoYXMgaG9yaXpvbnRhbCBjb29yZGluYXRlIDMuIFdoaWNoIGNvbmNsdXNpb24gaXMgdmFsaWQ/Iiwib3B0aW9ucyI6WyJBLiByID0gMyBiZWNhdXNlIHRoZSByZWFsIHBhcnQgaXMgMyIsIkIuIGEgPSA1IGJlY2F1c2UgbWFnbml0dWRlIGVxdWFscyByZWFsIHBhcnQiLCJDLiBhID0gMyBhbmQgciA9IDUgYXJlIGRpZmZlcmVudCBxdWFudGl0aWVzIiwiRC4gSW0oeikgbXVzdCBiZSA1Il0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiVGhlIGhvcml6b250YWwgY29vcmRpbmF0ZSBpcyB0aGUgcmVhbCBwYXJ0IGEsIHdoaWxlIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4gaXMgdGhlIG1hZ25pdHVkZSByLiBUaGV5IGFyZSBvbmx5IGVxdWFsIGluIHNwZWNpYWwgY2FzZXMsIG5vdCBpbiBnZW5lcmFsLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgaXMgdGhlIHN0YW5kYXJkIHRyYXAgb2YgY29uZnVzaW5nIGNvb3JkaW5hdGUgd2l0aCBkaXN0YW5jZS4iLCJCIjoiTWFnbml0dWRlIGRvZXMgbm90IHJlcGxhY2UgdGhlIHJlYWwgcGFydC4iLCJEIjoiS25vd2luZyByIGFuZCBhIGRvZXMgbm90IGZvcmNlIEltKHopIHRvIGVxdWFsIDUuIn0sImhpbnQiOiJDb29yZGluYXRlIGFuZCBkaXN0YW5jZSBhcmUgbm90IHRoZSBzYW1lIGdlb21ldHJpYyBxdWFudGl0eS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiY29tcGxleF9wbGFuZV9wb2ludF93aXRoX3JhZGl1c19hbmRfaG9yaXpvbnRhbF9wcm9qZWN0aW9uIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJldWxlcl9hbmRfY29uanVnYXRlIiwibGFiZWwiOiJVc2UgRXVsZXIncyBmb3JtdWxhIGFuZCBpbnRlcnByZXQgdGhlIGNvbXBsZXggY29uanVnYXRlIGdlb21ldHJpY2FsbHkiLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJVc2luZyBFdWxlcidzIGZvcm11bGEsIHdoaWNoIGV4cHJlc3Npb24gaXMgZXF1aXZhbGVudCB0byB6ID0gcihjb3POuCArIGogc2luzrgpPyIsIm9wdGlvbnMiOlsiQS4geiA9IHIgZV57LWrOuH0iLCJCLiB6ID0gZV57cmrOuH0iLCJDLiB6ID0gciBlXntqzrh9IiwiRC4geiA9IHIoY29zzrggLSBqIHNpbs64KSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IkV1bGVyJ3MgZm9ybXVsYSBnaXZlcyBlXntqzrh9ID0gY29zzrggKyBqIHNpbs64LCBzbyBtdWx0aXBseWluZyBieSByIGdpdmVzIHogPSByIGVee2rOuH0uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhhdCB3b3VsZCBjb3JyZXNwb25kIHRvIGNvc864IC0gaiBzaW7OuC4iLCJCIjoiVGhpcyBpbmNvcnJlY3RseSBwbGFjZXMgciBpbnNpZGUgdGhlIGV4cG9uZW50LiIsIkQiOiJUaGUgc2lnbiBvZiB0aGUgaW1hZ2luYXJ5IHRlcm0gaXMgd3JvbmcgZm9yICtqIHNpbs64LiJ9LCJoaW50IjoiU3Vic3RpdHV0ZSBFdWxlcidzIGZvcm11bGEgZGlyZWN0bHkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgeiA9IGEgKyBqYiwgd2hhdCBkb2VzIGl0cyBjb25qdWdhdGUgeiogPSBhIC0gamIgcmVwcmVzZW50IG9uIHRoZSBjb21wbGV4IHBsYW5lPyIsIm9wdGlvbnMiOlsiQS4gQSByZWZsZWN0aW9uIGFjcm9zcyB0aGUgcmVhbCBheGlzIiwiQi4gQSByZWZsZWN0aW9uIGFjcm9zcyB0aGUgaW1hZ2luYXJ5IGF4aXMiLCJDLiBBIHJvdGF0aW9uIGJ5IDkwIGRlZ3JlZXMiLCJELiBBIGNoYW5nZSBpbiBtYWduaXR1ZGUgb25seSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkNoYW5naW5nIGIgdG8gLWIgZmxpcHMgdGhlIHZlcnRpY2FsIGNvb3JkaW5hdGUgd2hpbGUga2VlcGluZyB0aGUgaG9yaXpvbnRhbCBjb29yZGluYXRlIHVuY2hhbmdlZCwgd2hpY2ggaXMgcmVmbGVjdGlvbiBhY3Jvc3MgdGhlIHJlYWwgYXhpcy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJSZWZsZWN0aW9uIGFjcm9zcyB0aGUgaW1hZ2luYXJ5IGF4aXMgd291bGQgY2hhbmdlIGEgdG8gLWEuIiwiQyI6IkEgOTAtZGVncmVlIHJvdGF0aW9uIGNoYW5nZXMgYm90aCBjb29yZGluYXRlcyBkaWZmZXJlbnRseS4iLCJEIjoiVGhlIGNvbmp1Z2F0ZSBrZWVwcyBtYWduaXR1ZGUgdGhlIHNhbWUgYnV0IGFsc28gY2hhbmdlcyB0aGUgc2lnbiBvZiB0aGUgYW5nbGUuIn0sImhpbnQiOiJXaGljaCBjb29yZGluYXRlIGNoYW5nZXMgc2lnbj8iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiY29tcGxleF9wbGFuZV93aXRoX3pfYW5kX2Nvbmp1Z2F0ZV9yZWZsZWN0aW9uIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%

# B.1-2 Algebra of Complex Numbers

> **Section Objective:** Learn to read, plot, and rewrite complex numbers — skills that will appear directly on exams and make later signal-processing algebra much cleaner.

---

Start with a concrete example. The complex number **z = 3 + 4j** means exactly this: move 3 units along the real (horizontal) axis, then 4 units along the imaginary (vertical) axis. That's it — a point on a 2D plane.

This section covers three things: how complex numbers are **written** in rectangular form, how they are **read** on the complex plane, and how they are **rewritten** in polar form. Polar form is worth learning because it often turns messy multiplication into simple addition of angles.

As the textbook notes, complex numbers frequently appear as useful intermediates — the final answer may be real, but the path through complex arithmetic is far easier.

By the end of this section, you will be able to identify real and imaginary parts, convert between rectangular and polar forms, state Euler's formula, and find the complex conjugate of any complex number.

## 1. Rectangular Form: What a + jb Means

Take **z = 3 + 4j** again. The number 3 is the **real part** and the number 4 is the **imaginary part**. In general, any complex number can be written as:

**z = a + jb**

where:
- **Re z = a** (the real part — the horizontal coordinate)
- **Im z = b** (the imaginary part — the vertical coordinate)

### COMMON EXAM MISTAKE

Students often write Im z = bj. This is wrong. The imaginary part is the **real number** b — the coefficient of j — not the full term bj. The symbol j is just the axis marker, not part of the value.

#### Example

For z = 3 + 4j: Re z = 3 and Im z = 4.
For z = 5 − 2j: Re z = 5 and Im z = −2 (not −2j).

Think of a and b as ordinary Cartesian coordinates: a is how far right you go, b is how far up you go. Complex numbers are just points on a plane with a special notation.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*The complex plane: z = a + jb is plotted at point (a, b), with magnitude r measuring the distance from the origin and angle θ measured from the real axis; the conjugate z* = a − jb appears as the mirror image of z reflected across the real axis.*

$$z = a + jb, \qquad \operatorname{Re} z = a, \qquad \operatorname{Im} z = b$$
*Rectangular form separates a complex number into its horizontal coordinate a (the real part) and its vertical coordinate b (the imaginary part), placing it as a unique point on the complex plane.*

## 2. Polar Form: The Same Number Written with r and θ

Return to **z = 3 + 4j**. Instead of saying "3 steps right and 4 steps up," we can describe the same point by two other quantities:

- **r** — the straight-line distance from the origin to the point
- **θ** — the angle that line makes with the positive real axis

This is polar form, and it describes the exact same point as rectangular form — just using a different coordinate system, the way GPS coordinates and a street address can both locate the same building.

The connection between the two systems comes from basic trigonometry:

- The horizontal component is **a = r cos θ**
- The vertical component is **b = r sin θ**

Substituting into z = a + jb gives:

**z = r(cos θ + j sin θ)**

For z = 3 + 4j, you can verify: r = √(3² + 4²) = 5, and θ = arctan(4/3) ≈ 53.1°.

### KEY INSIGHT

Rectangular form is convenient for **addition**. Polar form is convenient for **multiplication and powers**. Knowing both lets you choose the easier path for any given problem.

$$a = r\cos\theta, \qquad b = r\sin\theta, \qquad z = a + jb = r(\cos\theta + j\sin\theta)$$
*These formulas convert the same complex number between rectangular coordinates (a, b) and polar coordinates (r, θ), with cosine giving the horizontal component and sine giving the vertical component.*

## 3. Euler's Formula and the Complex Conjugate

The polar form r(cos θ + j sin θ) appears so often in engineering that mathematicians found a compact shorthand for the bracketed part. **Euler's formula** states:

**e^{jθ} = cos θ + j sin θ**

This means the polar form can be written even more compactly as z = r e^{jθ}, which you will see frequently in later chapters. For now, just memorize the identity — no proof required.

### THE COMPLEX CONJUGATE

Looking at the textbook figure, notice the point z* sitting below the real axis, directly mirroring z. The **complex conjugate** of z = a + jb is:

**z* = a − jb**

Same real part, opposite sign on the imaginary part. Geometrically, it is a reflection across the real axis.

### EXAM TIP

Exam questions frequently ask you to identify the conjugate of a given complex number, or to spot which expression has the correct sign change. Always check: real part stays the same, imaginary part flips sign. Nothing else changes.

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula packages the cosine and sine components of a unit-magnitude complex number into a single compact exponential expression, making polar-form arithmetic far more efficient.*

---
**📌 Key Takeaways**
- Rectangular form z = a + jb: Re z = a, Im z = b (not bj — the coefficient only).
- Polar conversion: a = r cos θ, b = r sin θ; same point, different coordinate system.
- Euler's formula: e^{jθ} = cos θ + j sin θ — memorize this identity exactly.
- Conjugate z* = a − jb: flip the imaginary sign; reflects z across the real axis.

*In the next section we will use these representations to perform arithmetic on complex numbers — addition, multiplication, and division — and see why polar form makes multiplication elegantly simple.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJSZWN0YW5ndWxhciBmb3JtIGFuZCBpZGVudGlmeWluZyByZWFsL2ltYWdpbmFyeSBwYXJ0cyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSA1IC0gMmosIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gUmUgeiA9IC0yIGFuZCBJbSB6ID0gNSIsIkIuIFJlIHogPSA1IGFuZCBJbSB6ID0gLTIiLCJDLiBSZSB6ID0gNSBhbmQgSW0geiA9IC0yaiIsIkQuIFJlIHogPSAyIGFuZCBJbSB6ID0gLTUiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJJbiB6ID0gYSArIGpiLCB0aGUgcmVhbCBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudCBub3QgYXR0YWNoZWQgdG8gaiwgYW5kIHRoZSBpbWFnaW5hcnkgcGFydCBpcyB0aGUgcmVhbC1udW1iZXIgY29lZmZpY2llbnQgb2Ygai4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIHN3YXBzIHRoZSByZWFsIGFuZCBpbWFnaW5hcnkgcGFydHMuIiwiQyI6IlRoZSBpbWFnaW5hcnkgcGFydCBpcyAtMiwgbm90IHRoZSBmdWxsIHRlcm0gLTJqLiIsIkQiOiJUaGVzZSB2YWx1ZXMgZG8gbm90IG1hdGNoIHRoZSBnaXZlbiBudW1iZXIuIn0sImhpbnQiOiJSZWFkIHRoZSBudW1iZXIgYXMgaG9yaXpvbnRhbCBwYXJ0IHBsdXMgaiB0aW1lcyB2ZXJ0aWNhbCBjb2VmZmljaWVudC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkEgc3R1ZGVudCBzYXlzOiAnVGhlIGltYWdpbmFyeSBwYXJ0IG9mIDcgKyAzaiBpcyAzai4nIEV4cGxhaW4gd2h5IHRoaXMgaXMgdGVjaG5pY2FsbHkgaW5jb3JyZWN0LiIsImlkZWFsX2Fuc3dlciI6IlRoZSBpbWFnaW5hcnkgcGFydCBpcyAzLCBiZWNhdXNlIEltIHogbWVhbnMgdGhlIHJlYWwtbnVtYmVyIGNvZWZmaWNpZW50IG9mIGouIFRoZSB0ZXJtIDNqIGlzIHRoZSBpbWFnaW5hcnkgdGVybSBpbiB0aGUgZXhwcmVzc2lvbiwgbm90IHRoZSBpbWFnaW5hcnkgcGFydCBpdHNlbGYuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBzdGF0ZSB0aGF0IEltIHogPSAzIiwiTXVzdCBkaXN0aW5ndWlzaCBpbWFnaW5hcnkgcGFydCBmcm9tIHRoZSB0ZXJtIDNqIiwiTXVzdCBtZW50aW9uIHRoYXQgaiBpcyB0aGUgbWFya2VyIGF0dGFjaGVkIHRvIHRoZSBjb2VmZmljaWVudCJdLCJleHBsYW5hdGlvbiI6IlRoaXMgdGVzdHMgd2hldGhlciB0aGUgc3R1ZGVudCBrbm93cyB0aGUgZm9ybWFsIG1lYW5pbmcgb2YgaW1hZ2luYXJ5IHBhcnQgcmF0aGVyIHRoYW4ganVzdCByZWFkaW5nIHN5bWJvbHMgY2FzdWFsbHkuIiwiaGludCI6IlNlcGFyYXRlIHRoZSBjb2VmZmljaWVudCBmcm9tIHRoZSBzeW1ib2wgai4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6InBsYW5lX2FuZF9jb25qdWdhdGUiLCJsYWJlbCI6IkNvbXBsZXggcGxhbmUgaW50ZXJwcmV0YXRpb24gYW5kIGNvbmp1Z2F0ZSBnZW9tZXRyeSIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6Ik9uIHRoZSBjb21wbGV4IHBsYW5lLCB3aGljaCBwb2ludCByZXByZXNlbnRzIHogPSAtMyArIDRqPyIsIm9wdGlvbnMiOlsiQS4gKC0zLCA0KSIsIkIuICg0LCAtMykiLCJDLiAoLTMsIC00KSIsIkQuICgzLCA0KSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkEgY29tcGxleCBudW1iZXIgYSArIGpiIGlzIHBsb3R0ZWQgYXQgdGhlIENhcnRlc2lhbiBwb2ludCAoYSwgYikuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhpcyBzd2FwcyB0aGUgY29vcmRpbmF0ZXMuIiwiQyI6IlRoZSBpbWFnaW5hcnkgcGFydCBpcyArNCwgbm90IC00LiIsIkQiOiJUaGUgcmVhbCBwYXJ0IGlzIC0zLCBub3QgKzMuIn0sImhpbnQiOiJVc2UgKHJlYWwgcGFydCwgaW1hZ2luYXJ5IHBhcnQpLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJweXRob25fbWF0cGxvdGxpYiBjb21wbGV4IHBsYW5lIHdpdGggbGFiZWxlZCBheGVzIGFuZCBjYW5kaWRhdGUgcG9pbnRzIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgeiA9IGEgKyBqYiwgd2hhdCBpcyBpdHMgY29tcGxleCBjb25qdWdhdGU/Iiwib3B0aW9ucyI6WyJBLiBhIC0gamIiLCJCLiAtYSArIGpiIiwiQy4gLWEgLSBqYiIsIkQuIGpiIC0gYSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSBjb25qdWdhdGUga2VlcHMgdGhlIHJlYWwgcGFydCB0aGUgc2FtZSBhbmQgcmV2ZXJzZXMgdGhlIHNpZ24gb2YgdGhlIGltYWdpbmFyeSBwYXJ0LCB3aGljaCByZWZsZWN0cyB0aGUgcG9pbnQgYWNyb3NzIHRoZSByZWFsIGF4aXMuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhlIHJlYWwgcGFydCBzaG91bGQgbm90IGNoYW5nZSBzaWduLiIsIkMiOiJPbmx5IHRoZSBpbWFnaW5hcnkgcGFydCBjaGFuZ2VzIHNpZ24gaW4gdGhlIGNvbmp1Z2F0ZS4iLCJEIjoiVGhpcyBpcyBqdXN0IGEgcmVhcnJhbmdlZCBleHByZXNzaW9uIHdpdGggaW5jb3JyZWN0IHNpZ24gYmVoYXZpb3IuIn0sImhpbnQiOiJUaGluayAnbWlycm9yIGFjcm9zcyB0aGUgcmVhbCBheGlzJy4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoicHl0aG9uX21hdHBsb3RsaWIgY29tcGxleCBwbGFuZSBzaG93aW5nIHogYW5kIHoqIHN5bW1ldHJpYyBhYm91dCByZWFsIGF4aXMiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJwb2xhcl9hbmRfZXVsZXIiLCJsYWJlbCI6IlBvbGFyIGZvcm0gYW5kIEV1bGVyJ3MgZm9ybXVsYSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgYSBwb2ludCBpbiB0aGUgY29tcGxleCBwbGFuZSBoYXMgcG9sYXIgY29vcmRpbmF0ZXMgKHIsIM64KSwgd2hpY2ggcmVjdGFuZ3VsYXIgY29tcG9uZW50cyBhcmUgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIGEgPSByIHNpbiDOuCwgYiA9IHIgY29zIM64IiwiQi4gYSA9IHIgY29zIM64LCBiID0gciBzaW4gzrgiLCJDLiBhID0gY29zKHLOuCksIGIgPSBzaW4ocs64KSIsIkQuIGEgPSByIHRhbiDOuCwgYiA9IHIgY290IM64Il0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIGhvcml6b250YWwgY29tcG9uZW50IGlzIHIgY29zIM64IGFuZCB0aGUgdmVydGljYWwgY29tcG9uZW50IGlzIHIgc2luIM64LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgc3dhcHMgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgcm9sZXMuIiwiQyI6IlRoZSBmb3JtdWxhcyB1c2UgciBtdWx0aXBseWluZyBjb3NpbmUgYW5kIHNpbmUsIG5vdCBjb3NpbmUgYW5kIHNpbmUgb2Ygcs64LiIsIkQiOiJ0YW4gYW5kIGNvdCBhcmUgbm90IHRoZSBjb29yZGluYXRlIGZvcm11bGFzLiJ9LCJoaW50IjoiQWRqYWNlbnQgc2lkZSB1c2VzIGNvc2luZTsgb3Bwb3NpdGUgc2lkZSB1c2VzIHNpbmUuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AzX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBleHByZXNzaW9uIGlzIGV4YWN0bHkgZXF1YWwgdG8gRXVsZXIncyBmb3JtdWxhPyIsIm9wdGlvbnMiOlsiQS4gZV57as64fSA9IHIoY29zIM64ICsgaiBzaW4gzrgpIiwiQi4gZV57as64fSA9IGNvcyDOuCArIGogc2luIM64IiwiQy4gZV57as64fSA9IGNvcyDOuCAtIGogc2luIM64IiwiRC4gZV57as64fSA9IHIgY29zIM64ICsgaiByIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiRXVsZXIncyBmb3JtdWxhIGlzIHRoZSBpZGVudGl0eSBlXntqzrh9ID0gY29zIM64ICsgaiBzaW4gzrguIFRoZSBmYWN0b3IgciBiZWxvbmdzIHRvIGEgZ2VuZXJhbCBjb21wbGV4IG51bWJlciB6LCBub3QgdG8gRXVsZXIncyBmb3JtdWxhIGl0c2VsZi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgZmFjdG9yIHIgaXMgZXh0cmE7IEV1bGVyJ3MgZm9ybXVsYSBpdHNlbGYgaGFzIG5vIG1hZ25pdHVkZSBmYWN0b3IuIiwiQyI6IlRoZSBzaWduIG9mIHRoZSBpbWFnaW5hcnkgdGVybSBpcyB3cm9uZyBmb3IgZV57as64fS4iLCJEIjoiVGhpcyBpcyBub3QgdGhlIHNpbmUtY29zaW5lIGRlY29tcG9zaXRpb24uIn0sImhpbnQiOiJNZW1vcml6ZSB0aGUgZXhhY3QgaWRlbnRpdHkgYmVmb3JlIGF0dGFjaGluZyBhbnkgbWFnbml0dWRlLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfV19" style="display:none;"></div>%%KC_END%%

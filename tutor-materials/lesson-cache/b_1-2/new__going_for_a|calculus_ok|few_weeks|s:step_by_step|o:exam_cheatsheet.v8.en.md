# B.1-2 Algebra of Complex Numbers

> **Objective:** Connect the rectangular form z = a + jb with the polar form z = r(cos θ + j sin θ), and understand what each representation tells you geometrically and algebraically.

---

Take the number z = 3 + 4j. You already know how to plot it on the complex plane. But this section is about something more powerful: expressing that same point in *different but equivalent algebraic forms* — and moving fluently between them.

The exam will not just ask you to name Re(z) and Im(z). It will ask you to convert between rectangular and polar form, use the formulas correctly, and recognize the conjugate. Complex numbers are useful precisely because they act as a shorter route to solving real-world problems — what might take pages of trigonometry collapses into a single algebraic step when you use the right form. This section gives you the tools to do that.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*This single figure connects all three representations: the point z = a + jb in rectangular form, its polar description via magnitude r and angle θ, and its conjugate z* = a − jb reflected symmetrically across the real axis.*

## 1. From Coordinates to Algebra

Start with the concrete example z = 3 + 4j. The number 3 is the horizontal coordinate and 4 is the vertical coordinate on the complex plane.

In general, for any complex number written as z = a + jb:

- **a** is the **real part**: Re(z) = a
- **b** is the **imaginary part**: Im(z) = b
- **jb** is the **imaginary term** — the full expression including j

### NOTATION TRAP

Im(z) = b, **not** jb. The imaginary part is the plain number coefficient of j, never the term with j attached. For z = 3 + 4j, Im(z) = 4, not 4j. This distinction appears on exams regularly.

The point (a, b) on the complex plane and the algebraic expression a + jb are two ways of saying the same thing: the horizontal coordinate becomes the real part, and the vertical coordinate becomes the coefficient of j.

$$z = a + jb, \qquad \operatorname{Re}(z) = a, \qquad \operatorname{Im}(z) = b$$
*Rectangular form records the horizontal coordinate directly as the real part and the vertical coordinate coefficient directly as the imaginary part — no conversion needed.*

## 2. From Polar Coordinates to Rectangular Form

Here is the core principle: if a point on the complex plane sits at distance r from the origin and at angle θ from the positive real axis, then its rectangular coordinates must satisfy:

- a = r cos θ
- b = r sin θ

**Important:** r is the distance from the origin to the point — it is the magnitude of z, not the real part. Do not confuse r with a.

Let's work through a concrete example. Suppose r = 5 and θ is chosen so that cos θ = 3/5 and sin θ = 4/5. Then:

- a = r cos θ = 5 × (3/5) = 3
- b = r sin θ = 5 × (4/5) = 4

Substituting into z = a + jb gives z = 3 + 4j.

Now factor out r from the rectangular form:

z = a + jb = r cos θ + j(r sin θ) = r(cos θ + j sin θ)

This is the **polar form** of z. Same point, same number — just described by distance and angle instead of horizontal and vertical coordinates.

$$a = r\cos\theta, \qquad b = r\sin\theta, \qquad z = r(\cos\theta + j\sin\theta)$$
*These formulas convert the geometric data — distance r from the origin and angle θ from the real axis — into the algebraic rectangular form of the same complex number.*

## 3. Euler Form and the Conjugate

Euler's formula provides a compact shorthand for the cosine-sine pair:

e^{jθ} = cos θ + j sin θ

This means the polar form z = r(cos θ + j sin θ) can be written even more compactly as **z = r e^{jθ}**. Same meaning, fewer symbols — this form is especially useful in calculations involving multiplication and division of complex numbers.

### THE COMPLEX CONJUGATE

If z = a + jb, its **complex conjugate** is z* = a − jb. Geometrically, this is a reflection of the point z across the real axis: the horizontal position stays exactly the same, and only the vertical position flips sign.

For z = 3 + 4j, the conjugate is z* = 3 − 4j. The real part 3 is unchanged; the imaginary part changes from +4 to −4.

> **Exam tip:** The conjugate flips only the sign of the imaginary component. The real part is never touched.

$$e^{j\theta} = \cos\theta + j\sin\theta, \qquad z^* = a - jb$$
*Euler's formula compresses polar form into exponential form, while the conjugate flips only the sign of the imaginary component, reflecting the point across the real axis.*

---
**📌 Key Takeaways**
- Rectangular form z = a + jb: Re(z) = a and Im(z) = b (never jb).
- Polar-to-rectangular: a = r cos θ and b = r sin θ, where r is magnitude, not the real part.
- Euler form z = r e^{jθ} compacts polar form; conjugate z* = a − jb reflects across the real axis.

*In the next section we will build on these forms to do more operations with complex numbers.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJJZGVudGlmeSByZWFsIHBhcnQsIGltYWdpbmFyeSBwYXJ0LCBhbmQgcmVjdGFuZ3VsYXIgZm9ybSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSA3IC0gM2osIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gUmUoeikgPSA3IGFuZCBJbSh6KSA9IC0zIiwiQi4gUmUoeikgPSA3IGFuZCBJbSh6KSA9IC0zaiIsIkMuIFJlKHopID0gLTMgYW5kIEltKHopID0gNyIsIkQuIFJlKHopID0gN2ogYW5kIEltKHopID0gLTMiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJJbiB6ID0gYSArIGpiLCB0aGUgcmVhbCBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudCB3aXRob3V0IGosIGFuZCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50IG9mIGouIEhlcmUgYSA9IDcgYW5kIGIgPSAtMy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJJbSh6KSBpcyB0aGUgY29lZmZpY2llbnQgb2Ygaiwgbm90IHRoZSBmdWxsIHRlcm0gd2l0aCBqIGF0dGFjaGVkLiIsIkMiOiJUaGlzIHN3YXBzIHRoZSByZWFsIGFuZCBpbWFnaW5hcnkgcm9sZXMuIiwiRCI6IlRoZSByZWFsIHBhcnQgY2Fubm90IGNvbnRhaW4gai4ifSwiaGludCI6IlJlYWQgeiA9IGEgKyBqYiBieSBzZXBhcmF0aW5nIHRoZSBwbGFpbiBudW1iZXIgZnJvbSB0aGUgY29lZmZpY2llbnQgb2Ygai4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkEgc3R1ZGVudCBzYXlzLCAnRm9yIHogPSAyICsgNWosIHRoZSBpbWFnaW5hcnkgcGFydCBpcyA1ai4nIEV4cGxhaW4gcHJlY2lzZWx5IHdoYXQgaXMgd3Jvbmcgd2l0aCB0aGF0IHN0YXRlbWVudC4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIHJlYWwtbnVtYmVyIGNvZWZmaWNpZW50IG9mIGosIHNvIEltKHopID0gNS4gVGhlIHRlcm0gNWogaXMgdGhlIGltYWdpbmFyeSB0ZXJtIGluIHRoZSBleHByZXNzaW9uLCBub3QgdGhlIGltYWdpbmFyeSBwYXJ0IGl0c2VsZi4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IHN0YXRlIHRoYXQgSW0oeikgPSA1IiwiTXVzdCBkaXN0aW5ndWlzaCB0aGUgaW1hZ2luYXJ5IHBhcnQgZnJvbSB0aGUgZnVsbCB0ZXJtIDVqIiwiTXVzdCBjbGVhcmx5IHJlZmVyIHRvIHRoZSBjb2VmZmljaWVudCBvZiBqIl0sImV4cGxhbmF0aW9uIjoiVGhpcyB0ZXN0cyBhIGNvbW1vbiBub3RhdGlvbiB0cmFwIHRoYXQgYXBwZWFycyBmcmVxdWVudGx5IGluIGV4YW1zLiIsImhpbnQiOiJGb2N1cyBvbiB0aGUgY29lZmZpY2llbnQgb2Ygaiwgbm90IHRoZSBlbnRpcmUgdGVybS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6InBvbGFyX3RvX3JlY3Rhbmd1bGFyIiwibGFiZWwiOiJVc2UgYSA9IHIgY29zIM64IGFuZCBiID0gciBzaW4gzrgiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIGEgY29tcGxleCBudW1iZXIgaGFzIHBvbGFyIGRhdGEgciA9IDEwIGFuZCDOuCBzdWNoIHRoYXQgY29zIM64ID0gMC42IGFuZCBzaW4gzrggPSAwLjgsIHdoYXQgaXMgeiBpbiByZWN0YW5ndWxhciBmb3JtPyIsIm9wdGlvbnMiOlsiQS4gMTAgKyAxMGoiLCJCLiA2ICsgOGoiLCJDLiA4ICsgNmoiLCJELiAxMCgwLjYgKyAwLjgpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVXNlIGEgPSByIGNvcyDOuCA9IDEwKDAuNikgPSA2IGFuZCBiID0gciBzaW4gzrggPSAxMCgwLjgpID0gOCwgc28geiA9IDYgKyA4ai4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIGlnbm9yZXMgdGhlIGNvc2luZSBhbmQgc2luZSBmYWN0b3JzLiIsIkMiOiJUaGlzIHN3YXBzIGNvc2luZSBhbmQgc2luZS4iLCJEIjoiVGhpcyBpcyBub3Qgd3JpdHRlbiBhcyBhIGNvbXBsZXggbnVtYmVyIGFuZCBvbWl0cyBqLiJ9LCJoaW50IjoiQ29tcHV0ZSBhIGFuZCBiIHNlcGFyYXRlbHkgYmVmb3JlIHdyaXRpbmcgeiA9IGEgKyBqYi4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHN0YXRlbWVudCBhYm91dCB6ID0gcihjb3MgzrggKyBqIHNpbiDOuCkgaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIHIgaXMgYWx3YXlzIHRoZSByZWFsIHBhcnQgb2YgeiIsIkIuIHIgaXMgdGhlIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiB0byB0aGUgcG9pbnQgeiIsIkMuIHIgaXMgdGhlIHNhbWUgYXMgSW0oeikiLCJELiDOuCBpcyB0aGUgaW1hZ2luYXJ5IHBhcnQgb2YgeiJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkluIHBvbGFyIGZvcm0sIHIgaXMgdGhlIG1hZ25pdHVkZSwgbWVhbmluZyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIHRvIHRoZSBwb2ludCByZXByZXNlbnRpbmcgei4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgcmVhbCBwYXJ0IGlzIGEgPSByIGNvcyDOuCwgbm90IHIgaXRzZWxmIHVubGVzcyDOuCA9IDAuIiwiQyI6IlRoZSBpbWFnaW5hcnkgcGFydCBpcyBiID0gciBzaW4gzrgsIG5vdCByLiIsIkQiOiLOuCBpcyBhbiBhbmdsZSwgbm90IGEgY29vcmRpbmF0ZSB2YWx1ZS4ifSwiaGludCI6IlNlcGFyYXRlIGdlb21ldHJpYyBtZWFuaW5nIGZyb20gYWxnZWJyYWljIGNvbXBvbmVudHMuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InB5dGhvbl9tYXRwbG90bGliIGNvbXBsZXggcGxhbmUgd2l0aCBhIHBvaW50LCByYWRpdXMgciwgYW5kIGFuZ2xlIM64IGxhYmVsZWQiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJldWxlcl9hbmRfY29uanVnYXRlIiwibGFiZWwiOiJJbnRlcnByZXQgRXVsZXIgZm9ybSBhbmQgY29tcGxleCBjb25qdWdhdGUiLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJVc2luZyBFdWxlcidzIGZvcm11bGEsIHdoaWNoIGV4cHJlc3Npb24gaXMgZXF1aXZhbGVudCB0byByKGNvcyDOuCArIGogc2luIM64KT8iLCJvcHRpb25zIjpbIkEuIHIgZV57as64fSIsIkIuIHIgZV57LWrOuH0iLCJDLiBlXntyzrh9IiwiRC4gcihjb3MgzrggLSBqIHNpbiDOuCkiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJFdWxlcidzIGZvcm11bGEgZ2l2ZXMgZV57as64fSA9IGNvcyDOuCArIGogc2luIM64LCBzbyBtdWx0aXBseWluZyBieSByIGdpdmVzIHogPSByIGVee2rOuH0uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiZV57LWrOuH0gZXF1YWxzIGNvcyDOuCAtIGogc2luIM64LCB3aGljaCBjb3JyZXNwb25kcyB0byB0aGUgY29uanVnYXRlIGRpcmVjdGlvbi4iLCJDIjoiVGhpcyBpcyBub3QgRXVsZXIgZm9ybSBmb3IgYSBjb21wbGV4IG51bWJlciBpbiBwb2xhciBjb29yZGluYXRlcy4iLCJEIjoiVGhpcyBjb3JyZXNwb25kcyB0byB0aGUgY29uanVnYXRlIHoqLCBub3QgdGhlIG9yaWdpbmFsIHouIn0sImhpbnQiOiJNYXRjaCB0aGUgc2lnbiBvZiB0aGUgaiBzaW4gzrggdGVybS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3AzX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiB6ID0gNCArIDlqLCB3aGF0IGlzIGl0cyBjb21wbGV4IGNvbmp1Z2F0ZT8iLCJvcHRpb25zIjpbIkEuIC00ICsgOWoiLCJCLiA0IC0gOWoiLCJDLiAtNCAtIDlqIiwiRC4gOSArIDRqIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIGNvbmp1Z2F0ZSBrZWVwcyB0aGUgcmVhbCBwYXJ0IHRoZSBzYW1lIGFuZCBjaGFuZ2VzIG9ubHkgdGhlIHNpZ24gb2YgdGhlIGltYWdpbmFyeSB0ZXJtLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSByZWFsIHBhcnQgc2hvdWxkIG5vdCBjaGFuZ2Ugc2lnbi4iLCJDIjoiT25seSB0aGUgaW1hZ2luYXJ5IHNpZ24gZmxpcHMsIG5vdCBib3RoIHNpZ25zLiIsIkQiOiJUaGlzIHN3YXBzIHRoZSBwYXJ0cyBpbnN0ZWFkIG9mIGNvbmp1Z2F0aW5nLiJ9LCJoaW50IjoiUmVmbGVjdCBhY3Jvc3MgdGhlIHJlYWwgYXhpczogaG9yaXpvbnRhbCBwb3NpdGlvbiBzdGF5cywgdmVydGljYWwgc2lnbiBjaGFuZ2VzLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJweXRob25fbWF0cGxvdGxpYiBjb21wbGV4IHBsYW5lIHNob3dpbmcgeiBhbmQgeiogcmVmbGVjdGVkIGFjcm9zcyB0aGUgcmVhbCBheGlzIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%

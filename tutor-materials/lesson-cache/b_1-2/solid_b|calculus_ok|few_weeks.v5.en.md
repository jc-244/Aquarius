# B.1-2 Complex Numbers: Forms, Geometry, and Calculation Strategy

> **Section Objective:** Transform complex numbers from an abstract symbol trick into a practical coordinate-and-angle tool you can use confidently on exams.

Complex numbers were invented to solve equations that real numbers could not — but for this course, what matters is not history. What matters is that you can **identify real and imaginary parts on sight**, **switch fluently between rectangular form a+jb and exponential form re^{jθ}**, **handle quadrant traps when reading angles**, and **choose the form that makes arithmetic fastest**.

None of this requires calculus. The barrier is plane geometry and careful sign-reading — both of which you already have. By the end of this section, complex numbers will feel less like a mystery and more like a coordinate system with a useful extra dimension.

![Fig. B.2](/api/crop?page=book-005&fig=Fig.%20B.2)
*A complex number z = a + jb is a point — or equivalently a vector from the origin — in the complex plane, where a is the horizontal (real) coordinate and b is the vertical (imaginary) coordinate; this geometric picture is the foundation for every form and operation that follows.*

$$z=a+jb \quad\text{and}\quad z=r(\cos\theta + j\sin\theta)=re^{j\theta}$$
*These are three equivalent ways to describe the exact same complex number: the rectangular form a+jb gives its horizontal and vertical components directly; the trigonometric form r(cosθ + j sinθ) describes it by distance and direction; and the compact exponential form re^{jθ} packages that same distance-and-direction information into a single elegant expression.*

## 1. Reading a Complex Number in the Plane

When you write z = a + jb, you are giving a **coordinate pair** on the complex plane — exactly like (x, y) on a standard graph, but with the vertical axis labeled "imaginary."

> **Definition:** Re(z) = a and Im(z) = b.

### COMMON MISTAKE

Students often say the imaginary part is "jb." It is not. The imaginary part is the **coefficient** b — a plain real number. The symbol j is just the axis marker, not part of the value.

---

From the picture, two more quantities are immediate:

- **Magnitude** r = |z| is the straight-line distance from the origin to the point: r = √(a² + b²)
- **Angle** θ is the direction measured counterclockwise from the positive real axis: θ = tan⁻¹(b/a)

### EXAM TIP

The formula θ = tan⁻¹(b/a) alone is **not enough**. Your calculator returns a value in the range −90° to +90°, which covers only quadrants I and IV. Always check the **signs of a and b** first to confirm which quadrant the point actually lives in, then adjust the angle accordingly.

![Fig. B.4](/api/crop?page=book-009&fig=Fig.%20B.4)
*The same tan⁻¹ button can return a reference angle that points to the wrong quadrant — always locate the point by the signs of its real and imaginary parts before accepting the calculator's angle output.*

## 2. Converting Forms and Using Conjugates

The bridge between trigonometric and exponential form is **Euler's formula**:

e^{jθ} = cos θ + j sin θ

No proof needed here — what matters is the geometry. The expression e^{jθ} is a **unit-length vector pointing at angle θ**. Multiply it by r and you get a vector of length r pointing at that same angle. That is all re^{jθ} means: go distance r in direction θ.

---

The **conjugate** of z is defined as:

z\* = a − jb = re^{−jθ}

Geometrically, z\* is the **mirror image of z across the real axis** — same distance from the origin, opposite angle.

### KEY IDENTITIES

Two results you must have memorized:

- z + z\* = 2 Re(z)
- z · z\* = |z|²

### WHY THIS MATTERS FOR THE EXAM

Whenever you see a complex number in a denominator, multiply numerator and denominator by the conjugate. The denominator becomes a real number (|z|²) and the complex number disappears from the bottom — a standard technique that appears repeatedly in circuit and signal problems.

![Fig. B.3](/api/crop?page=book-007&fig=Fig.%20B.3)
*Exponential form represents a complex number as a vector with length r and angle θ; the unit circle diagram makes conjugates and special angles (±π/2, ±π) visually immediate.*

$$z^*=a-jb=re^{-j\theta},\qquad z+z^*=2\,\mathrm{Re}(z),\qquad zz^*=|z|^2$$
*Conjugation reverses the sign of the angle while keeping the magnitude unchanged, and these two identities — the sum giving twice the real part, the product giving the squared magnitude — are the algebraic payoff that makes conjugates so useful for simplifying expressions.*

## 3. Which Form Should You Use for Calculations?

This is a **decision rule**, not a derivation. Commit it to memory:

| Operation | Best Form | Why |
|-----------|-----------|-----|
| Addition / Subtraction | Cartesian (a + jb) | Real and imaginary components combine directly |
| Multiplication / Division | Polar (re^{jθ}) | Magnitudes multiply; angles add |
| Powers / Roots | Polar (re^{jθ}) | De Moivre's theorem: raise r to the power, multiply θ |

---

### KEY FORMULAS FOR MULTIPLICATION AND DIVISION

z₁ z₂ = r₁r₂ e^{j(θ₁+θ₂)}

z₁ / z₂ = (r₁/r₂) e^{j(θ₁−θ₂)}

#### Note

If you must divide in Cartesian form, multiply numerator and denominator by the conjugate of the denominator to clear the imaginary part from the bottom.

---

### WORKED MINI-EXAMPLE

Consider (3 + j4)(2 + j3). In Cartesian form you must expand, collect real and imaginary parts, and watch signs carefully — four multiplications and two additions. In polar form, convert each factor to re^{jθ}, multiply the magnitudes (5 × √13), and add the angles (53.1° + 56.3°) — two steps. The polar route is faster and less error-prone whenever the magnitudes and angles are clean numbers.

---
**📌 Key Takeaways**
- z = a+jb, r(cosθ+j sinθ), and re^{jθ} are three equivalent forms of the same complex number.
- Always check the quadrant from the signs of a and b before accepting a tan⁻¹ angle result.
- Use Cartesian form for addition and subtraction; use polar form for multiplication and division.

*In the next section we will use complex numbers to describe sinusoids more efficiently.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InBhcnRzX2FuZF9nZW9tZXRyeSIsImxhYmVsIjoiUmVhbCBwYXJ0LCBpbWFnaW5hcnkgcGFydCwgbWFnbml0dWRlLCBhbmQgYW5nbGUgbWVhbmluZyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSAtMiArIGozLCB3aGljaCBzdGF0ZW1lbnQgaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIFJlKHopID0gLTIgYW5kIEltKHopID0gMyIsIkIuIFJlKHopID0gLTIgYW5kIEltKHopID0gM2oiLCJDLiBSZSh6KSA9IDIgYW5kIEltKHopID0gLTMiLCJELiB8enwgPSA1Il0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiSW4geiA9IGEgKyBqYiwgdGhlIHJlYWwgcGFydCBpcyBhIGFuZCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50IG9mIGosIHdoaWNoIGlzIGIuIEhlcmUgYSA9IC0yIGFuZCBiID0gMy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiIzaiBpcyB0aGUgaW1hZ2luYXJ5IHRlcm0gaW4gdGhlIGV4cHJlc3Npb24sIG5vdCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXRzZWxmLiIsIkMiOiJUaGUgc2lnbnMgd2VyZSByZXZlcnNlZCBpbmNvcnJlY3RseS4iLCJEIjoiVGhlIG1hZ25pdHVkZSBpcyBzcXJ0KCgtMileMiArIDNeMikgPSBzcXJ0KDEzKSwgbm90IDUuIn0sImhpbnQiOiJTZXBhcmF0ZSB0aGUgY29lZmZpY2llbnQgZnJvbSB0aGUgc3ltYm9sIGouIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGF0IGRvZXMgdGhlIG1hZ25pdHVkZSB8enwgcmVwcmVzZW50IGdlb21ldHJpY2FsbHkgZm9yIHogPSBhICsgamI/Iiwib3B0aW9ucyI6WyJBLiBUaGUgc2xvcGUgYi9hIiwiQi4gVGhlIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiB0byB0aGUgcG9pbnQgeiIsIkMuIFRoZSBhbmdsZSBmcm9tIHRoZSBwb3NpdGl2ZSBpbWFnaW5hcnkgYXhpcyIsIkQuIFRoZSBjb25qdWdhdGUgb2YgeiJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6Ik1hZ25pdHVkZSBpcyB0aGUgbGVuZ3RoIG9mIHRoZSB2ZWN0b3IgZnJvbSB0aGUgb3JpZ2luIHRvIHRoZSBwb2ludCByZXByZXNlbnRpbmcgeiBpbiB0aGUgY29tcGxleCBwbGFuZS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJiL2EgaGVscHMgZGVmaW5lIGEgcmVmZXJlbmNlIGFuZ2xlLCBidXQgaXQgaXMgbm90IHRoZSBtYWduaXR1ZGUuIiwiQyI6IlRoZSBzdGFuZGFyZCBhbmdsZSBpcyBtZWFzdXJlZCBmcm9tIHRoZSBwb3NpdGl2ZSByZWFsIGF4aXMsIG5vdCB0aGUgaW1hZ2luYXJ5IGF4aXMuIiwiRCI6IlRoZSBjb25qdWdhdGUgcmVmbGVjdHMgdGhlIHBvaW50IGFjcm9zcyB0aGUgcmVhbCBheGlzOyBpdCBpcyBub3QgYSBsZW5ndGguIn0sImhpbnQiOiJUaGluayBvZiB6IGFzIGEgcG9pbnQgb24gYSBjb29yZGluYXRlIHBsYW5lLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJjb21wbGV4X3BsYW5lX3BvaW50Iiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoiY2FydGVzaWFuX3BvbGFyX2NvbnZlcnNpb24iLCJsYWJlbCI6IkNvbnZlcnRpbmcgYmV0d2VlbiBDYXJ0ZXNpYW4gYW5kIHBvbGFyIGZvcm0sIGluY2x1ZGluZyBxdWFkcmFudCBjaGVja2luZyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggcG9sYXIgZm9ybSBjb3JyZWN0bHkgcmVwcmVzZW50cyB6ID0gLTIgLSBqMyB1c2luZyBhIHByaW5jaXBhbCBhbmdsZSBpbiBkZWdyZWVzPyIsIm9wdGlvbnMiOlsiQS4gXFxzcXJ0ezEzfWVee2o1Ni4zXlxcY2lyY30iLCJCLiBcXHNxcnR7MTN9ZV57ajEyMy43XlxcY2lyY30iLCJDLiBcXHNxcnR7MTN9ZV57LWoxMjMuN15cXGNpcmN9IiwiRC4gMTNlXnstajEyMy43XlxcY2lyY30iXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJUaGUgcG9pbnQgKC0yLC0zKSBpcyBpbiB0aGUgdGhpcmQgcXVhZHJhbnQsIHNvIHRoZSBhbmdsZSBtdXN0IHBvaW50IHRoZXJlLiBBIGNvbnZlbmllbnQgcHJpbmNpcGFsIGFuZ2xlIGlzIC0xMjMuNyBkZWdyZWVzLCBhbmQgdGhlIG1hZ25pdHVkZSBpcyBzcXJ0KDEzKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiI1Ni4zIGRlZ3JlZXMgaXMgb25seSB0aGUgZmlyc3QtcXVhZHJhbnQgcmVmZXJlbmNlIGFuZ2xlLiIsIkIiOiIxMjMuNyBkZWdyZWVzIHBvaW50cyB0byBxdWFkcmFudCBJSSwgbm90IHF1YWRyYW50IElJSS4iLCJEIjoiVGhlIG1hZ25pdHVkZSBpcyBzcXJ0KDEzKSwgbm90IDEzLiJ9LCJoaW50IjoiRmluZCB0aGUgcXVhZHJhbnQgYmVmb3JlIHRydXN0aW5nIHRhbiBpbnZlcnNlLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJjb21wbGV4X3BsYW5lX3F1YWRyYW50X3Bsb3QiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkEgY2FsY3VsYXRvciBnaXZlcyB0YW5eey0xfSgxLy0yKSA9IC0yNi42IGRlZ3JlZXMgd2hlbiBjb252ZXJ0aW5nIC0yICsgajEgdG8gcG9sYXIgZm9ybS4gRXhwbGFpbiB3aHkgdGhhdCBpcyBub3QgdGhlIGZpbmFsIGFuc3dlciBhbmQgZ2l2ZSBhIGNvcnJlY3QgYW5nbGUuIiwiaWRlYWxfYW5zd2VyIjoiVGhlIHBvaW50ICgtMiwxKSBsaWVzIGluIHF1YWRyYW50IElJLCBidXQgLTI2LjYgZGVncmVlcyBsaWVzIGluIHF1YWRyYW50IElWLiBUaGUgY2FsY3VsYXRvciBnYXZlIG9ubHkgYSByZWZlcmVuY2UtYW5nbGUgc3R5bGUgcmVzdWx0IGZyb20gYi9hLiBXZSBtdXN0IGFkanVzdCBieSAxODAgZGVncmVlcyB0byBwbGFjZSB0aGUgYW5nbGUgaW4gdGhlIGNvcnJlY3QgcXVhZHJhbnQsIHNvIGEgY29ycmVjdCBhbmdsZSBpcyAxNTMuNCBkZWdyZWVzLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3QgbWVudGlvbiB0aGUgYWN0dWFsIHF1YWRyYW50IG9mIHRoZSBwb2ludCIsIk11c3QgZXhwbGFpbiB0aGF0IHRhbiBpbnZlcnNlIGFsb25lIGNhbiByZXR1cm4gdGhlIHdyb25nIHJlZmVyZW5jZSBhbmdsZSIsIk11c3QgcHJvdmlkZSBhIGNvcnJlY3QgY29ycmVjdGVkIGFuZ2xlIHN1Y2ggYXMgMTUzLjQgZGVncmVlcyJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQgdW5kZXJzdGFuZHMgdGhlIGNvbW1vbiBjYWxjdWxhdG9yIHRyYXAsIG5vdCBqdXN0IGZvcm11bGEgc3Vic3RpdHV0aW9uLiIsImhpbnQiOiJQbG90IHRoZSBzaWducyBvZiB0aGUgcmVhbCBhbmQgaW1hZ2luYXJ5IHBhcnRzIGZpcnN0LiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiZXVsZXJfYW5kX2Nvbmp1Z2F0ZSIsImxhYmVsIjoiRXVsZXIgZm9ybSBhbmQgY29uanVnYXRlIGlkZW50aXRpZXMiLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiB6ID0gcmVee2pcXHRoZXRhfSwgd2hpY2ggZXhwcmVzc2lvbiBpcyBpdHMgY29uanVnYXRlPyIsIm9wdGlvbnMiOlsiQS4gcmVee2pcXHRoZXRhfSIsIkIuIC1yZV57alxcdGhldGF9IiwiQy4gcmVeey1qXFx0aGV0YX0iLCJELiByXnstMX1lXnstalxcdGhldGF9Il0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiQ29uanVnYXRpb24gZmxpcHMgdGhlIHNpZ24gb2YgdGhlIGltYWdpbmFyeSBwYXJ0LCB3aGljaCBpbiBwb2xhciBmb3JtIG1lYW5zIHJldmVyc2luZyB0aGUgc2lnbiBvZiB0aGUgYW5nbGUgd2hpbGUga2VlcGluZyB0aGUgc2FtZSBtYWduaXR1ZGUuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhhdCBpcyB0aGUgb3JpZ2luYWwgbnVtYmVyLCBub3QgaXRzIGNvbmp1Z2F0ZS4iLCJCIjoiTXVsdGlwbHlpbmcgYnkgLTEgY2hhbmdlcyB0aGUgcG9pbnQgYnkgMTgwIGRlZ3JlZXMsIG5vdCBieSByZWZsZWN0aW9uIGFjcm9zcyB0aGUgcmVhbCBheGlzLiIsIkQiOiJUaGF0IHdvdWxkIGFsc28gaW52ZXJ0IHRoZSBtYWduaXR1ZGUsIHdoaWNoIGNvbmp1Z2F0aW9uIGRvZXMgbm90IGRvLiJ9LCJoaW50IjoiQ29uanVnYXRlIG1lYW5zIG1pcnJvciBhY3Jvc3MgdGhlIHJlYWwgYXhpcy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3AzX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgeiA9IDMgKyBqNCwgd2hhdCBpcyB6eio/Iiwib3B0aW9ucyI6WyJBLiAyNSIsIkIuIDciLCJDLiAzIC0gajQiLCJELiA1Il0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoienoqID0gfHp8XjIgPSAzXjIgKyA0XjIgPSAyNS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiI3IGlzIHRoZSBzdW0gb2YgdGhlIGNvbXBvbmVudHMsIG5vdCB0aGUgcHJvZHVjdCB3aXRoIHRoZSBjb25qdWdhdGUuIiwiQyI6IlRoYXQgaXMgeiosIG5vdCB6eiouIiwiRCI6IjUgaXMgfHp8LCBub3QgfHp8XjIuIn0sImhpbnQiOiJVc2UgenoqID0gYV4yICsgYl4yLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6ImJlc3RfZm9ybV9mb3Jfb3BlcmF0aW9ucyIsImxhYmVsIjoiQ2hvb3NpbmcgQ2FydGVzaWFuIG9yIHBvbGFyIGZvcm0gZm9yIGRpZmZlcmVudCBvcGVyYXRpb25zIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A0X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBjaG9pY2UgY29ycmVjdGx5IG1hdGNoZXMgdGhlIG1vc3QgY29udmVuaWVudCBmb3JtIHRvIHRoZSBvcGVyYXRpb24/Iiwib3B0aW9ucyI6WyJBLiBBZGRpdGlvbiBpbiBwb2xhcjsgbXVsdGlwbGljYXRpb24gaW4gQ2FydGVzaWFuIiwiQi4gQWRkaXRpb24gaW4gQ2FydGVzaWFuOyBtdWx0aXBsaWNhdGlvbiBpbiBwb2xhciIsIkMuIEJvdGggYWRkaXRpb24gYW5kIG11bHRpcGxpY2F0aW9uIGluIENhcnRlc2lhbiBvbmx5IiwiRC4gQm90aCBhZGRpdGlvbiBhbmQgbXVsdGlwbGljYXRpb24gaW4gcG9sYXIgb25seSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkFkZGl0aW9uIGFuZCBzdWJ0cmFjdGlvbiBjb21iaW5lIHJlYWwgYW5kIGltYWdpbmFyeSBjb21wb25lbnRzIGRpcmVjdGx5LCBzbyBDYXJ0ZXNpYW4gaXMgYmVzdC4gTXVsdGlwbGljYXRpb24gYW5kIGRpdmlzaW9uIGNvbWJpbmUgbWFnbml0dWRlcyBhbmQgYW5nbGVzIGNsZWFubHksIHNvIHBvbGFyIGlzIGJlc3QuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyByZXZlcnNlcyB0aGUgZWZmaWNpZW50IGNob2ljZXMuIiwiQyI6IkNhcnRlc2lhbiB3b3JrcywgYnV0IG11bHRpcGxpY2F0aW9uIGlzIHVzdWFsbHkgZWFzaWVyIGluIHBvbGFyLiIsIkQiOiJQb2xhciBpcyBjb252ZW5pZW50IGZvciBtdWx0aXBsaWNhdGlvbiwgYnV0IG5vdCBmb3IgZGlyZWN0IGFkZGl0aW9uLiJ9LCJoaW50IjoiQXNrIHdoZXRoZXIgY29tcG9uZW50cyBhZGQgZGlyZWN0bHkgb3IgYW5nbGVzIGNvbWJpbmUgZGlyZWN0bHkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%

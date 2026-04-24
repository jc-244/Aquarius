# B.1-2 Algebra of Complex Numbers

> **Section Objective:** Move fluently between rectangular form and polar form of a complex number, and recognize the geometric meaning of the complex conjugate.

---

Take z = 3 + 4j. You can read this as an ordered pair (3, 4) — a point sitting 3 units to the right and 4 units up on the complex plane. That is the rectangular view. But the same point can also be described by how far it is from the origin and at what angle — that is the polar view.

This section is about moving between those two descriptions. The algebra is straightforward, but the conceptual traps are real: **r is not the real part**, and **θ is not the imaginary part**. These are among the most common errors on exams. Rectangular coordinates (a, b) tell you where the point sits on the axes. Polar coordinates (r, θ) tell you the distance and direction from the origin. Same point, two languages.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*Fig. B.2 unifies three ideas in one diagram: the rectangular coordinates (a, b) of z = a + jb, the polar description via magnitude r and angle θ, and the complex conjugate z* = a − jb reflected symmetrically across the real axis.*

## 1. Rectangular Form vs. Polar Form

Start with the example z = 3 + 4j. Reading directly from the expression:

- **Real part:** a = 3 (horizontal coordinate)
- **Imaginary part:** b = 4 (vertical coordinate)

In general, any complex number in **rectangular form** is written as z = a + jb, where a and b are simply the x- and y-coordinates of the point on the complex plane.

The **same point** can be described in **polar form** using two different quantities:

- **r** — the straight-line distance from the origin to the point (the magnitude)
- **θ** — the angle that line makes with the positive real axis

### KEY CONTRAST

| Rectangular | Polar |
|---|---|
| a = horizontal coordinate | r = distance from origin |
| b = vertical coordinate | θ = angle from real axis |

#### Warning

r is **not** the real part unless the point lies exactly on the positive real axis (θ = 0). In the example z = 3 + 4j, the real part is 3, but the magnitude is r = √(3² + 4²) = **5** — a completely different number.

$$z = a + jb = r(\cos\theta + j\sin\theta)$$
*This single formula gives two equivalent descriptions of the same complex number. On the left, rectangular form uses the axis coordinates a (real part) and b (imaginary part). On the right, polar form uses the magnitude r and the angle θ. The two descriptions are linked by the projection formulas: **a = r cos θ** and **b = r sin θ** — the real and imaginary parts are simply the horizontal and vertical shadows cast by the radius r onto the axes.*

## 2. Reading r, θ, and the Conjugate from the Diagram

Look at a point above the real axis. Now ask: what happens if we reflect it straight down across the real axis, as if the real axis were a mirror?

The horizontal position does not move — the real part **a stays the same**. The vertical position flips — the imaginary part **changes sign from b to −b**. That reflected point is the **complex conjugate**, written z*.

### DEFINITION

If z = a + jb, then z\* = a − jb.

Geometrically, reflection across the real axis preserves distance from the origin, so the **magnitude r is unchanged**. However, the angle flips sign: if z sits at angle θ above the real axis, then z\* sits at angle **−θ** below it.

#### Worked Example

Let z = 2 + 5j. Then:
- z\* = 2 − 5j (real part 2 unchanged, imaginary part flips from +5 to −5)
- Both z and z\* have magnitude r = √(4 + 25) = √29
- The angle of z\* is −θ, the mirror image of z's angle

## 3. Two Ways to Give Directions to the Same Place

Imagine you need to meet someone at a specific corner of a perfectly grid-like city. You could say: **"Walk 3 blocks east and 4 blocks north."** That is rectangular form — you are specifying two independent axis-aligned steps, a and b.

Alternatively, you could say: **"Head out at a 53° angle from due east and walk exactly 5 blocks."** That is polar form — you are specifying a distance r and a direction θ.

Both sets of directions lead to the identical corner. But notice: the distance you walk (5 blocks) is **not** the same as the eastward step (3 blocks), and the angle (53°) is **not** the same as the northward step (4 blocks).

### EXAM TIP

Two different descriptions of the same location do not mean a = r or b = θ. Confusing a coordinate component with the total distance — or an axis step with an angle — is one of the most reliable ways to lose points on an exam.

---
**📌 Key Takeaways**
- Rectangular form z = a + jb gives axis coordinates; polar form gives distance r and angle θ — not the same quantities.
- Never confuse a (real part, horizontal coordinate) with r (magnitude, full distance from origin).
- The conjugate z* = a − jb reflects across the real axis: same r, same a, flipped sign on b and θ.

*In the next section we will explore operations on complex numbers — addition, multiplication, and division — and discover why multiplication in polar form reduces to a simple scaling and rotation.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3ZzX3BvbGFyX21lYW5pbmciLCJsYWJlbCI6IlJlY3Rhbmd1bGFyIGNvb3JkaW5hdGVzIHZlcnN1cyBwb2xhciBjb29yZGluYXRlcyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSAzICsgNGosIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gVGhlIHJlYWwgcGFydCBpcyA0IGFuZCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgMyIsIkIuIFRoZSByZWN0YW5ndWxhciBjb29yZGluYXRlcyBhcmUgKDQsIDMpIiwiQy4gVGhlIHJlY3Rhbmd1bGFyIGNvb3JkaW5hdGVzIGFyZSAoMywgNCkiLCJELiBUaGUgbWFnbml0dWRlIGlzIDMiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJJbiB6ID0gYSArIGpiLCB0aGUgcmVhbCBwYXJ0IGlzIGEgYW5kIHRoZSBpbWFnaW5hcnkgcGFydCBpcyBiLCBzbyB6ID0gMyArIDRqIGNvcnJlc3BvbmRzIHRvIHRoZSBwb2ludCAoMywgNCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBzd2FwcyB0aGUgcmVhbCBhbmQgaW1hZ2luYXJ5IHBhcnRzLiIsIkIiOiJUaGlzIHJldmVyc2VzIHRoZSBjb29yZGluYXRlIG9yZGVyLiIsIkQiOiJUaGUgbWFnbml0dWRlIGlzIHNxcnQoM14yICsgNF4yKSA9IDUsIG5vdCAzLiJ9LCJoaW50IjoiUmVhZCB6ID0gYSArIGpiIGFzIHgtY29vcmRpbmF0ZSBmaXJzdCwgeS1jb29yZGluYXRlIHNlY29uZC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHBhaXIgY29ycmVjdGx5IGRlc2NyaWJlcyB0aGUgc2FtZSBjb21wbGV4IG51bWJlciBpbiBwb2xhciBsYW5ndWFnZT8iLCJvcHRpb25zIjpbIkEuIGEgYW5kIGIgYXJlIGRpc3RhbmNlIGFuZCBhbmdsZSIsIkIuIHIgYW5kIM64IGFyZSBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBjb29yZGluYXRlcyIsIkMuIGEgYW5kIGIgYXJlIHJlY3Rhbmd1bGFyIGNvb3JkaW5hdGVzLCB3aGlsZSByIGFuZCDOuCBhcmUgbWFnbml0dWRlIGFuZCBhbmdsZSIsIkQuIGEgYW5kIM64IGFyZSByZWN0YW5ndWxhciBjb29yZGluYXRlcywgd2hpbGUgYiBhbmQgciBhcmUgcG9sYXIgY29vcmRpbmF0ZXMiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJSZWN0YW5ndWxhciBmb3JtIHVzZXMgYXhpcyBjb29yZGluYXRlcyBhIGFuZCBiLiBQb2xhciBmb3JtIHVzZXMgdGhlIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiByIGFuZCB0aGUgYW5nbGUgzrguIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiRGlzdGFuY2UgYW5kIGFuZ2xlIGJlbG9uZyB0byBwb2xhciBjb29yZGluYXRlcywgbm90IHJlY3Rhbmd1bGFyIGNvb3JkaW5hdGVzLiIsIkIiOiJUaGlzIGluY29ycmVjdGx5IGFzc2lnbnMgZ2VvbWV0cmljIG1lYW5pbmdzIHRvIHIgYW5kIM64LiIsIkQiOiJUaGlzIG1peGVzIHRoZSB0d28gc3lzdGVtcyBpbmNvcnJlY3RseS4ifSwiaGludCI6IkFzayB3aGljaCBwYWlyIHRlbGxzIHlvdSAnd2hlcmUgb24gdGhlIGF4ZXMnIGFuZCB3aGljaCBwYWlyIHRlbGxzIHlvdSAnaG93IGZhciBhbmQgYXQgd2hhdCBhbmdsZS4nIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJhX2JfZnJvbV9yX3RoZXRhIiwibGFiZWwiOiJDb25uZWN0aW5nIHJlY3Rhbmd1bGFyIGFuZCBwb2xhciBmb3JtcyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgYSBwb2ludCBoYXMgcG9sYXIgY29vcmRpbmF0ZXMgKHIsIM64KSwgd2hpY2ggZm9ybXVsYXMgZ2l2ZSB0aGUgcmVjdGFuZ3VsYXIgY29tcG9uZW50cyBvZiB6PyIsIm9wdGlvbnMiOlsiQS4gYSA9IHIgc2luIM64LCBiID0gciBjb3MgzrgiLCJCLiBhID0gciBjb3MgzrgsIGIgPSByIHNpbiDOuCIsIkMuIGEgPSBjb3MgzrgsIGIgPSBzaW4gzrgiLCJELiBhID0gcs64LCBiID0gci/OuCJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSBob3Jpem9udGFsIHByb2plY3Rpb24gaXMgYSA9IHIgY29zIM64IGFuZCB0aGUgdmVydGljYWwgcHJvamVjdGlvbiBpcyBiID0gciBzaW4gzrguIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBzd2FwcyBjb3NpbmUgYW5kIHNpbmUuIiwiQyI6Ikl0IGlnbm9yZXMgdGhlIG1hZ25pdHVkZSByLiIsIkQiOiJUaGVzZSBhcmUgbm90IHRoZSBjb29yZGluYXRlIHByb2plY3Rpb24gZm9ybXVsYXMuIn0sImhpbnQiOiJDb3NpbmUgZ29lcyB3aXRoIHRoZSBob3Jpem9udGFsIGNvbXBvbmVudCBmcm9tIHRoZSBhbmdsZSBtZWFzdXJlZCBmcm9tIHRoZSByZWFsIGF4aXMuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InB5dGhvbl9tYXRwbG90bGliIGNvbXBsZXggcGxhbmUgd2l0aCByYWRpdXMgciBhbmQgYW5nbGUgzrggcHJvamVjdGVkIHRvIGEgYW5kIGIiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkEgc3R1ZGVudCBzYXlzOiAnU2luY2UgeiA9IGEgKyBqYiA9IHIoY29zIM64ICsgaiBzaW4gzrgpLCB0aGUgcmVhbCBwYXJ0IGEgbXVzdCBlcXVhbCByLicgRXhwbGFpbiB3aHkgdGhpcyBpcyB3cm9uZy4iLCJpZGVhbF9hbnN3ZXIiOiJUaGlzIGlzIHdyb25nIGJlY2F1c2UgYSBpcyBvbmx5IHRoZSBob3Jpem9udGFsIGNvbXBvbmVudCBvZiB0aGUgY29tcGxleCBudW1iZXIsIHdoaWxlIHIgaXMgdGhlIGZ1bGwgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luLiBJbiBmYWN0IGEgPSByIGNvcyDOuCwgc28gYSBlcXVhbHMgciBvbmx5IGluIHRoZSBzcGVjaWFsIGNhc2UgzrggPSAwLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3RhdGUgdGhhdCBhIGlzIGEgY29tcG9uZW50IGFuZCByIGlzIHRoZSBtYWduaXR1ZGUiLCJNdXN0IGluY2x1ZGUgdGhlIHJlbGF0aW9uIGEgPSByIGNvcyDOuCIsIk11c3Qgbm90ZSB0aGF0IGEgPSByIG9ubHkgaW4gYSBzcGVjaWFsIGNhc2UsIG5vdCBnZW5lcmFsbHkiXSwiZXhwbGFuYXRpb24iOiJUaGlzIHRhcmdldHMgYSB2ZXJ5IGNvbW1vbiBleGFtIG1pc3Rha2U6IGNvbmZ1c2luZyBhIGNvb3JkaW5hdGUgY29tcG9uZW50IHdpdGggdGhlIG1hZ25pdHVkZS4iLCJoaW50IjoiQ29tcGFyZSBhIHNpZGUgb2YgYSByaWdodCB0cmlhbmdsZSB3aXRoIHRoZSBoeXBvdGVudXNlLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiY29uanVnYXRlX2dlb21ldHJ5IiwibGFiZWwiOiJHZW9tZXRyaWMgbWVhbmluZyBvZiB0aGUgY29tcGxleCBjb25qdWdhdGUiLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiB6ID0gYSArIGpiLCB3aGljaCBzdGF0ZW1lbnQgYWJvdXQgeiogaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIHoqID0gLWEgKyBqYiBhbmQgaXQgcmVmbGVjdHMgYWNyb3NzIHRoZSBpbWFnaW5hcnkgYXhpcyIsIkIuIHoqID0gYSAtIGpiIGFuZCBpdCByZWZsZWN0cyBhY3Jvc3MgdGhlIHJlYWwgYXhpcyIsIkMuIHoqID0gLWEgLSBqYiBhbmQgaXQgcmVmbGVjdHMgdGhyb3VnaCB0aGUgb3JpZ2luIiwiRC4geiogPSBhICsgamIgYW5kIGl0IHN0YXlzIHVuY2hhbmdlZCBmb3IgZXZlcnkgeiJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSBjb21wbGV4IGNvbmp1Z2F0ZSBrZWVwcyB0aGUgcmVhbCBwYXJ0IGFuZCBjaGFuZ2VzIHRoZSBzaWduIG9mIHRoZSBpbWFnaW5hcnkgcGFydCwgd2hpY2ggaXMgYSByZWZsZWN0aW9uIGFjcm9zcyB0aGUgcmVhbCBheGlzLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IkNoYW5naW5nIHRoZSBzaWduIG9mIGEgd291bGQgcmVmbGVjdCBhY3Jvc3MgdGhlIGltYWdpbmFyeSBheGlzLCBub3QgZm9ybSB0aGUgY29uanVnYXRlLiIsIkMiOiJDaGFuZ2luZyBib3RoIHNpZ25zIGdpdmVzIC16LCBub3QgeiouIiwiRCI6Ik9ubHkgcHVyZWx5IHJlYWwgbnVtYmVycyByZW1haW4gdW5jaGFuZ2VkIHVuZGVyIGNvbmp1Z2F0aW9uLiJ9LCJoaW50IjoiQ29uanVnYXRpb24gZmxpcHMgb25seSB0aGUgdmVydGljYWwgY29vcmRpbmF0ZS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoicHl0aG9uX21hdHBsb3RsaWIgY29tcGxleCBwbGFuZSBzaG93aW5nIHogYW5kIHoqIG1pcnJvcmVkIGFjcm9zcyB0aGUgcmVhbCBheGlzIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiTGV0IHogPSAyICsgNWouIFdoaWNoIHN0YXRlbWVudCBpcyB0cnVlPyIsIm9wdGlvbnMiOlsiQS4geiogPSAyIC0gNWogYW5kIGJvdGggeiBhbmQgeiogaGF2ZSB0aGUgc2FtZSBtYWduaXR1ZGUiLCJCLiB6KiA9IC0yICsgNWogYW5kIHRoZSBtYWduaXR1ZGUgY2hhbmdlcyBzaWduIiwiQy4geiogPSAyIC0gNWogYW5kIHRoZSByZWFsIHBhcnQgY2hhbmdlcyBzaWduIiwiRC4geiogPSAtMiAtIDVqIGFuZCB0aGUgYW5nbGUgc3RheXMgdGhlIHNhbWUiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJDb25qdWdhdGlvbiBjaGFuZ2VzIG9ubHkgdGhlIHNpZ24gb2YgdGhlIGltYWdpbmFyeSBwYXJ0LiBSZWZsZWN0aW9uIGFjcm9zcyB0aGUgcmVhbCBheGlzIGtlZXBzIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4gdW5jaGFuZ2VkLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoZSByZWFsIHBhcnQgZG9lcyBub3QgY2hhbmdlLCBhbmQgbWFnbml0dWRlIGRvZXMgbm90IGhhdmUgYSBzaWduLiIsIkMiOiJUaGUgcmVhbCBwYXJ0IHN0YXlzIDIuIiwiRCI6IkNoYW5naW5nIGJvdGggc2lnbnMgZ2l2ZXMgLXosIG5vdCB6KiwgYW5kIHRoZSBhbmdsZSB3b3VsZCBub3Qgc3RheSB0aGUgc2FtZS4ifSwiaGludCI6Ik1pcnJvciB0aGUgcG9pbnQgdmVydGljYWxseSwgbm90IGhvcml6b250YWxseS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX1dfQ==" style="display:none;"></div>%%KC_END%%

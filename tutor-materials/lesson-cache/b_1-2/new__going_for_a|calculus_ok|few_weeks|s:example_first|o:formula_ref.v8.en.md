# B.1-2 Algebra of Complex Numbers

> **Objective:** Switch fluently between rectangular and polar forms of a complex number, understand the conjugate as a geometric reflection, and connect polar form to Euler's formula.

Take z = 3 + 4j. You can read this as the point (3, 4) on a grid — 3 units right, 4 units up. But you can also describe the same point by how far it is from the origin and in what direction. Both descriptions refer to exactly the same number.

This section is about that switch. **Rectangular form** a + jb uses horizontal and vertical coordinates. **Polar form** r(cos θ + j sin θ) uses distance and angle. Knowing both — and moving between them — is essential because exam problems routinely ask you to identify real and imaginary parts, distinguish a from r, or rewrite an expression in a different form.

---

> **Quick Reference**
>
> | Symbol | Meaning |
> |--------|---------|
> | z = a + jb | Rectangular form |
> | r = \|z\| | Magnitude (distance from origin) |
> | θ | Angle from positive real axis |

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*Figure B.2 ties together all four key ideas in one picture: the point z = a + jb with Cartesian coordinates (a, b), the magnitude r and angle θ that define its polar description, and the conjugate z* = a − jb sitting directly below, reflected across the real axis.*

## 1. One Number, Two Descriptions

Start with z = 3 + 4j.

- **Real part:** Re z = 3 (the horizontal coordinate)
- **Imaginary part:** Im z = 4 (the vertical coordinate)
- **Point on the plane:** (3, 4)

Now describe the same point using distance and direction instead of grid steps:

- **r** = distance from the origin = 5
- **θ** = angle measured from the positive real axis

The link between the two descriptions is:

$$a = r\cos\theta \qquad b = r\sin\theta$$

### COMMON CONFUSION

**a is not r.** The real part a is the horizontal coordinate. The magnitude r is the straight-line distance from the origin. They are equal only in the special case where b = 0 (the number lies on the real axis).

#### Analogy

Think of giving someone directions to a cafe. You can say "3 blocks east, 4 blocks north" (rectangular: a = 3, b = 4) or "5 blocks away, heading northeast at a specific angle" (polar: r = 5, θ). Same cafe, two valid descriptions.

---

> **Formula Reference**
>
> | Expression | Meaning |
> |------------|---------|
> | z = a + jb | Rectangular form |
> | Re z = a | Real part |
> | Im z = b | Imaginary part |
> | a = r cos θ | Horizontal component |
> | b = r sin θ | Vertical component |

$$z = a + jb = r\cos\theta + jr\sin\theta = r(\cos\theta + j\sin\theta)$$
*This is not three different numbers — it is one complex number written in three equivalent ways. First, replace the real part a with r cos θ and the imaginary part b with r sin θ; this gives the middle expression. Then factor r out of both terms to arrive at the compact polar form on the right. One critical warning: do not confuse the magnitude r with the real part a. The real part a is just one coordinate; r is the full distance from the origin, which depends on both a and b.*

## 2. Polar Form, Conjugate, and Euler's Formula

Stay with z = 3 + 4j. Its **complex conjugate** is:

$$z^* = 3 - 4j$$

All that changed is the sign of the imaginary part. On the complex plane, this flips the point from (3, 4) to (3, −4) — a reflection straight across the real axis. The horizontal coordinate stays exactly the same; only the vertical coordinate reverses.

In general, for z = a + jb:

$$z^* = a - jb$$

Changing to the conjugate does **not** move the point left or right — it only mirrors it up or down.

### EULER'S FORMULA

Now connect polar form to exponential notation. There is a remarkable identity:

$$e^{j\theta} = \cos\theta + j\sin\theta$$

Because of this, the polar form r(cos θ + j sin θ) can be written even more compactly as:

$$z = re^{j\theta}$$

This exponential form is not just shorthand — it makes multiplication, division, and later derivations dramatically simpler.

---

> **Formula Reference**
>
> | Expression | Meaning |
> |------------|---------|
> | z* = a − jb | Complex conjugate |
> | e^{jθ} = cos θ + j sin θ | Euler's formula |
> | z = re^{jθ} | Exponential (polar) form |

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula packages the cosine and sine components of a complex number into a single compact exponential, so r(cos θ + j sin θ) becomes simply re^{jθ}. This form is especially powerful in later work: even when a problem starts and ends with real quantities, writing intermediate steps in exponential form keeps the algebra short and avoids trigonometric expansion by hand.*

Suppose you want to describe a destination to a friend. You could say: **"Walk 3 blocks east and 4 blocks north."** That is the rectangular description — two perpendicular components, a = 3 and b = 4, tell you exactly where to go.

Alternatively, you could say: **"Walk 5 blocks in a direction that is slightly north of northeast."** That is the polar description — a single distance r = 5 and a single angle θ carry the same information.

Both sets of directions lead to the same destination. Neither is more correct; each is more convenient in different situations. The rectangular form is easy to read off coordinates; the polar form is easy to scale or rotate.

Now add one more instruction: **"Reflect the destination across the east-west street."** If the original destination was 4 blocks north, the reflected one is 4 blocks south — but the east-west position is unchanged. That is exactly what the complex conjugate does: it keeps the real part a (east-west) fixed and reverses the imaginary part b (north-south), mapping z = a + jb to z* = a − jb.

---
**📌 Key Takeaways**
- z = a + jb and z = r(cos θ + j sin θ) are two descriptions of the same point in the complex plane.
- a is the horizontal coordinate; r is the distance from the origin — they are not the same quantity.
- The conjugate z* = a − jb reflects z across the real axis, reversing only the imaginary part.

*In the next section we will apply these forms to the algebra of complex numbers — addition, multiplication, and division — and see why exponential form makes multiplication equivalent to scaling and rotation.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3ZzX3BvbGFyX3JvbGVzIiwibGFiZWwiOiJNZWFuaW5nIG9mIGEsIGIsIHIsIGFuZCDOuCIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSBhICsgamIsIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gYSBpcyB0aGUgbWFnbml0dWRlIGFuZCBiIGlzIHRoZSBhbmdsZSIsIkIuIGEgaXMgdGhlIHJlYWwgcGFydCBhbmQgYiBpcyB0aGUgaW1hZ2luYXJ5IHBhcnQiLCJDLiBhIGlzIHRoZSBhbmdsZSBhbmQgYiBpcyB0aGUgbWFnbml0dWRlIiwiRC4gYSBhbmQgYiBhcmUgcG9sYXIgY29vcmRpbmF0ZXMiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJJbiByZWN0YW5ndWxhciBmb3JtIHogPSBhICsgamIsIGEgaXMgdGhlIHJlYWwgcGFydCBhbmQgYiBpcyB0aGUgaW1hZ2luYXJ5IHBhcnQuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIG1hZ25pdHVkZSBpcyByLCBub3QgYSwgYW5kIHRoZSBhbmdsZSBpcyDOuCwgbm90IGIuIiwiQyI6IlRoaXMgc3dhcHMgcmVjdGFuZ3VsYXIgYW5kIHBvbGFyIG1lYW5pbmdzIGluY29ycmVjdGx5LiIsIkQiOiJhIGFuZCBiIGFyZSBDYXJ0ZXNpYW4gY29vcmRpbmF0ZXMsIG5vdCBwb2xhciBjb29yZGluYXRlcy4ifSwiaGludCI6IlJlY3Rhbmd1bGFyIGZvcm0gdXNlcyBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBjb29yZGluYXRlcy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgc3R1ZGVudCBzYXlzOiAnSW4geiA9IGEgKyBqYiwgdGhlIHN5bWJvbCBhIG1lYW5zIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4uJyBXaGF0IGlzIHRoZSBiZXN0IHJlc3BvbnNlPyIsIm9wdGlvbnMiOlsiQS4gQ29ycmVjdCBmb3IgZXZlcnkgY29tcGxleCBudW1iZXIiLCJCLiBJbmNvcnJlY3Q7IGEgaXMgdGhlIGhvcml6b250YWwgY29vcmRpbmF0ZSwgd2hpbGUgdGhlIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiBpcyByIiwiQy4gSW5jb3JyZWN0OyBhIGlzIHRoZSBhbmdsZSDOuCIsIkQuIENvcnJlY3Qgd2hlbmV2ZXIgYiBpcyBwb3NpdGl2ZSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6ImEgaXMgdGhlIHJlYWwgcGFydCwgaS5lLiB0aGUgaG9yaXpvbnRhbCBjb29yZGluYXRlLiBUaGUgbWFnbml0dWRlIGlzIHIgPSB8enwsIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiYSBlcXVhbHMgdGhlIG1hZ25pdHVkZSBvbmx5IGluIHNwZWNpYWwgY2FzZXMsIG5vdCBpbiBnZW5lcmFsLiIsIkMiOiJUaGUgYW5nbGUgaXMgzrgsIG5vdCBhLiIsIkQiOiJUaGUgc2lnbiBvZiBiIGRvZXMgbm90IG1ha2UgYSBiZWNvbWUgdGhlIG1hZ25pdHVkZS4ifSwiaGludCI6IkFzayB3aGF0IHF1YW50aXR5IG1lYXN1cmVzIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbi4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImNvbnZlcnNpb25fcmVsYXRpb25zIiwibGFiZWwiOiJGcm9tIHBvbGFyIGNvb3JkaW5hdGVzIHRvIHJlY3Rhbmd1bGFyIGNvbXBvbmVudHMiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIGEgcG9pbnQgaW4gdGhlIGNvbXBsZXggcGxhbmUgaGFzIHBvbGFyIGNvb3JkaW5hdGVzIChyLCDOuCksIHdoaWNoIHBhaXIgZ2l2ZXMgaXRzIHJlY3Rhbmd1bGFyIGNvbXBvbmVudHM/Iiwib3B0aW9ucyI6WyJBLiBhID0gciBzaW4gzrgsIGIgPSByIGNvcyDOuCIsIkIuIGEgPSByIGNvcyDOuCwgYiA9IHIgc2luIM64IiwiQy4gYSA9IGNvcyDOuCwgYiA9IHNpbiDOuCIsIkQuIGEgPSByIHRhbiDOuCwgYiA9IHIiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgaG9yaXpvbnRhbCBjb29yZGluYXRlIGlzIGEgPSByIGNvcyDOuCBhbmQgdGhlIHZlcnRpY2FsIGNvb3JkaW5hdGUgaXMgYiA9IHIgc2luIM64LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgc3dhcHMgY29zaW5lIGFuZCBzaW5lLiIsIkMiOiJUaGlzIG9taXRzIHRoZSBzY2FsaW5nIGJ5IHIuIiwiRCI6IlRoaXMgaXMgbm90IHRoZSBjb29yZGluYXRlIHJlbGF0aW9uc2hpcCBmb3IgcG9sYXIgZm9ybS4ifSwiaGludCI6IlRoaW5rIGFkamFjZW50IGFuZCBvcHBvc2l0ZSBjb21wb25lbnRzIG9mIGEgcmlnaHQgdHJpYW5nbGUuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImNvbXBsZXhfcGxhbmVfd2l0aF9yYWRpdXNfYW5nbGUiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IlN0YXJ0aW5nIGZyb20geiA9IGEgKyBqYiBhbmQgdGhlIHJlbGF0aW9ucyBhID0gciBjb3MgzrgsIGIgPSByIHNpbiDOuCwgZGVyaXZlIHRoZSBwb2xhci1mb3JtIGV4cHJlc3Npb24gZm9yIHogc3RlcCBieSBzdGVwLiIsImlkZWFsX2Fuc3dlciI6IlN1YnN0aXR1dGUgYSA9IHIgY29zIM64IGFuZCBiID0gciBzaW4gzrggaW50byB6ID0gYSArIGpiIHRvIGdldCB6ID0gciBjb3MgzrggKyBqIHIgc2luIM64LiBUaGVuIGZhY3RvciBvdXQgcjogeiA9IHIoY29zIM64ICsgaiBzaW4gzrgpLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3Vic3RpdHV0ZSBib3RoIGEgYW5kIGIgY29ycmVjdGx5IiwiTXVzdCBzaG93IHRoZSBpbnRlcm1lZGlhdGUgZm9ybSByIGNvcyDOuCArIGogciBzaW4gzrgiLCJNdXN0IGZhY3RvciBvdXQgciBjb3JyZWN0bHkiXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB3aGV0aGVyIHRoZSBzdHVkZW50IGNhbiBwZXJmb3JtIHRoZSBkZXJpdmF0aW9uIHJhdGhlciB0aGFuIG1lcmVseSByZWNvZ25pemUgdGhlIGZpbmFsIGZvcm11bGEuIiwiaGludCI6IlJlcGxhY2UgYSBhbmQgYiBmaXJzdDsgc2ltcGxpZnkgc2Vjb25kLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6ImNvbmp1Z2F0ZV9hbmRfZ2VvbWV0cnkiLCJsYWJlbCI6IkNvbXBsZXggY29uanVnYXRlIGFzIGdlb21ldHJpYyByZWZsZWN0aW9uIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgeiA9IGEgKyBqYiwgd2hhdCBpcyBpdHMgY29tcGxleCBjb25qdWdhdGUgYW5kIHdoYXQgZG9lcyBpdCBkbyBnZW9tZXRyaWNhbGx5PyIsIm9wdGlvbnMiOlsiQS4geiogPSAtYSArIGpiLCByZWZsZWN0aW9uIGFjcm9zcyB0aGUgaW1hZ2luYXJ5IGF4aXMiLCJCLiB6KiA9IGEgLSBqYiwgcmVmbGVjdGlvbiBhY3Jvc3MgdGhlIHJlYWwgYXhpcyIsIkMuIHoqID0gLWEgLSBqYiwgcm90YXRpb24gYnkgMTgwIGRlZ3JlZXMiLCJELiB6KiA9IGIgKyBqYSwgcmVmbGVjdGlvbiBhY3Jvc3MgdGhlIGxpbmUgeSA9IHgiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgY29uanVnYXRlIGNoYW5nZXMgb25seSB0aGUgc2lnbiBvZiB0aGUgaW1hZ2luYXJ5IHBhcnQsIHNvIHRoZSBwb2ludCByZWZsZWN0cyBhY3Jvc3MgdGhlIHJlYWwgYXhpcy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJDaGFuZ2luZyB0aGUgc2lnbiBvZiBhIHdvdWxkIHJlZmxlY3QgYWNyb3NzIHRoZSBpbWFnaW5hcnkgYXhpcywgbm90IGdpdmUgdGhlIGNvbmp1Z2F0ZS4iLCJDIjoiQ2hhbmdpbmcgYm90aCBzaWducyBnaXZlcyAteiwgbm90IHoqLiIsIkQiOiJUaGlzIHN3YXBzIGNvb3JkaW5hdGVzIGFuZCBpcyBub3QgdGhlIGNvbmp1Z2F0ZSBvcGVyYXRpb24uIn0sImhpbnQiOiJLZWVwIHRoZSByZWFsIHBhcnQ7IGZsaXAgdGhlIGltYWdpbmFyeSBwYXJ0LiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJjb21wbGV4X3BsYW5lX3dpdGhfcG9pbnRfYW5kX3JlZmxlY3Rpb24iLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJldWxlcl9jb25uZWN0aW9uIiwibGFiZWwiOiJFdWxlcidzIGZvcm11bGEgYW5kIGV4cG9uZW50aWFsIGZvcm0iLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A0X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBleHByZXNzaW9uIGlzIGVxdWl2YWxlbnQgdG8gcihjb3MgzrggKyBqIHNpbiDOuCk/Iiwib3B0aW9ucyI6WyJBLiByZV57as64fSIsIkIuIGVee3LOuH0iLCJDLiByICsgZV57as64fSIsIkQuIHIoY29zIM64IC0gaiBzaW4gzrgpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiQnkgRXVsZXIncyBmb3JtdWxhLCBlXntqzrh9ID0gY29zIM64ICsgaiBzaW4gzrgsIHNvIG11bHRpcGx5aW5nIGJ5IHIgZ2l2ZXMgcmVee2rOuH0uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiRXVsZXIncyBmb3JtdWxhIGRvZXMgbm90IHNheSBjb3MgzrggKyBqIHNpbiDOuCA9IGVee3LOuH0uIiwiQyI6IlRoZSBwcm9kdWN0IHIoY29zIM64ICsgaiBzaW4gzrgpIGlzIG5vdCBhIHN1bSBvZiBzZXBhcmF0ZSB0ZXJtcyByIGFuZCBlXntqzrh9LiIsIkQiOiJUaGUgbWludXMgc2lnbiB3b3VsZCBjb3JyZXNwb25kIHRvIGVeey1qzrh9LCBub3QgZV57as64fS4ifSwiaGludCI6IlJlY2FsbCB0aGUgZXhhY3Qgc3RhdGVtZW50IG9mIEV1bGVyJ3MgZm9ybXVsYS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19XX0=" style="display:none;"></div>%%KC_END%%

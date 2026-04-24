# B.1-2 Algebra of Complex Numbers

> **Objective:** Learn to read, write, and convert complex numbers in both rectangular and polar form — the foundation for all complex-number work in this course.

---

Start with a concrete example: **z = 3 + 4j** means 3 units along the real (horizontal) axis and 4 units up the imaginary (vertical) axis. That's it — a complex number is just a point on a 2D plane.

This section covers two ways to describe that same point: **rectangular form** (horizontal + vertical) and **polar form** (distance + angle). Switching between them often makes algebra much easier — problems that look messy in real-number notation become clean and compact with complex numbers.

**Exam questions typically ask you to read:** Re(z), Im(z), magnitude r, angle θ, and conjugate z*.

> **Formula Reference:** z = a + jb, Re(z) = a, Im(z) = b

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*This figure is the core map for the entire section: it shows z = a + jb as the point (a, b) on the complex plane, its magnitude r as the distance from the origin, its angle θ measured from the real axis, and its conjugate z* = a − jb reflected symmetrically across the real axis.*

## 1. Rectangular Form — Parts of a Complex Number

Take **z = 5 − 2j** as our working example.

- The **real part** is **5** — the horizontal coordinate.
- The **imaginary part** is **−2** — the vertical coordinate.

### EXAM TRAP

The imaginary part of z = 5 − 2j is **−2**, not **−2j**. The imaginary part is always a plain real number — the coefficient of j, without the j attached. Writing Im(z) = −2j is one of the most common mistakes on exams.

---

In general, for **z = a + jb**:
- **a** is the horizontal coordinate on the complex plane.
- **b** is the vertical coordinate on the complex plane.

All purely real numbers (b = 0) sit on the horizontal axis. All purely imaginary numbers (a = 0) sit on the vertical axis.

> **Formula Reference:** z = a + jb, Re(z) = a, Im(z) = b

$$z = a + jb$$
*This is the rectangular form of a complex number, where a gives the horizontal coordinate (real part) and b gives the vertical coordinate (imaginary part) of the point on the complex plane.*

## 2. Polar Form and Euler's Formula

Instead of describing a point by how far right and how far up it is, polar form describes it by **how far away** (magnitude r) and **in what direction** (angle θ).

Concrete example: if a point is at distance r from the origin at angle θ, then basic trigonometry gives its horizontal part as **r cos θ** and its vertical part as **r sin θ**. Substituting into z = a + jb:

$$z = r\cos\theta + j\,r\sin\theta = r(\cos\theta + j\sin\theta)$$

This is the **polar form** of z.

### EULER'S FORMULA — THE SHORTCUT

Euler's formula states that **e^{jθ} = cos θ + j sin θ**, which means the entire directional part (cos θ + j sin θ) can be written as a single exponential. So polar form becomes:

$$z = r\,e^{j\theta}$$

This compact notation will appear constantly in later engineering math. For now, just recognize it as a shorter way to write the same magnitude-and-angle information.

#### Note
You do not need to prove Euler's formula here — just know what it says and how to use it.

> **Formula Reference:** a = r cos θ, b = r sin θ, z = r(cos θ + j sin θ), e^{jθ} = cos θ + j sin θ

$$a = r\cos\theta, \quad b = r\sin\theta, \quad z = r(\cos\theta + j\sin\theta)$$
*Polar coordinates restate the same complex number using magnitude r and angle θ instead of horizontal coordinate a and vertical coordinate b — two languages describing the same point.*

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula compresses the cosine-sine polar expression into a single compact exponential, the form used constantly throughout engineering mathematics and signal processing.*

---
**📌 Key Takeaways**
- Rectangular form z = a + jb: a is horizontal, b is vertical — Im(z) is b, never bj.
- Polar form z = r(cos θ + j sin θ) = re^{jθ}: same point described by distance and angle.
- Conjugate z* = a − jb is the mirror reflection of z across the real axis.

*In the next section we will use these forms to carry out complex-number operations more efficiently.

> **Formula Reference:** z = a + jb, Re(z) = a, Im(z) = b, z = r(cos θ + j sin θ), e^{jθ} = cos θ + j sin θ*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJJZGVudGlmeSByZWFsIGFuZCBpbWFnaW5hcnkgcGFydHMgZnJvbSByZWN0YW5ndWxhciBmb3JtIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgeiA9IDUgLSAyaiwgd2hpY2ggc3RhdGVtZW50IGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBSZSh6KSA9IC0yIGFuZCBJbSh6KSA9IDUiLCJCLiBSZSh6KSA9IDUgYW5kIEltKHopID0gLTIiLCJDLiBSZSh6KSA9IDUgYW5kIEltKHopID0gLTJqIiwiRC4gUmUoeikgPSAwIGFuZCBJbSh6KSA9IDUgLSAyaiJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkluIHogPSBhICsgamIsIHRoZSByZWFsIHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50IHdpdGhvdXQgaiBhbmQgdGhlIGltYWdpbmFyeSBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudCBvZiBqLiBTbyBSZSh6KSA9IDUgYW5kIEltKHopID0gLTIuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBzd2FwcyB0aGUgcmVhbCBhbmQgaW1hZ2luYXJ5IHBhcnRzLiIsIkMiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIG51bWJlciBtdWx0aXBseWluZyBqLCBub3QgdGhlIGZ1bGwgdGVybSAtMmouIiwiRCI6IkEgY29tcGxleCBudW1iZXIgaXMgc3BsaXQgaW50byB0d28gcmVhbC12YWx1ZWQgcGFydHMsIG5vdCB0cmVhdGVkIGFzIG9uZSBpbWFnaW5hcnkgcGFydC4ifSwiaGludCI6IlJlYWQgdGhlIGNvZWZmaWNpZW50IG9mIGogc2VwYXJhdGVseSBmcm9tIHRoZSBzeW1ib2wgai4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkEgc3R1ZGVudCBzYXlzIHRoZSBpbWFnaW5hcnkgcGFydCBvZiB6ID0gNyArIDNqIGlzIDNqLiBDb3JyZWN0IHRoaXMgc3RhdGVtZW50IHByZWNpc2VseS4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgMywgbm90IDNqLiBUaGUgdGVybSAzaiBpcyB0aGUgaW1hZ2luYXJ5IHRlcm0gaW4gdGhlIGV4cHJlc3Npb24sIGJ1dCBJbSh6KSBpcyB0aGUgcmVhbCBjb2VmZmljaWVudCBvZiBqLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3RhdGUgdGhhdCBJbSh6KSA9IDMiLCJNdXN0IGRpc3Rpbmd1aXNoIGltYWdpbmFyeSBwYXJ0IGZyb20gaW1hZ2luYXJ5IHRlcm0iLCJNdXN0IGV4cGxhaW4gdGhhdCBqIGlzIGEgbWFya2VyLCBub3QgcGFydCBvZiB0aGUgcGFydCB2YWx1ZSJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHRoZSBtb3N0IGNvbW1vbiBub3RhdGlvbiBtaXN0YWtlIHN0dWRlbnRzIG1ha2Ugd2l0aCBjb21wbGV4IG51bWJlcnMuIiwiaGludCI6IkFzayB3aGF0IG51bWJlciBtdWx0aXBsaWVzIGouIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJjb21wbGV4X3BsYW5lX3JlYWRpbmciLCJsYWJlbCI6IlJlYWQgZ2VvbWV0cmljIGluZm9ybWF0aW9uIGZyb20gdGhlIGNvbXBsZXgtcGxhbmUgZmlndXJlIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6Ik9uIHRoZSBjb21wbGV4IHBsYW5lLCB3aGF0IGRvZXMgdGhlIHBvaW50IHogPSBhICsgamIgcmVwcmVzZW50PyIsIm9wdGlvbnMiOlsiQS4gVGhlIHBvaW50IChiLCBhKSIsIkIuIFRoZSBwb2ludCAoYSwgYikiLCJDLiBUaGUgcG9pbnQgKGEgKyBiLCAwKSIsIkQuIFRoZSBwb2ludCAociwgzrgpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiQSBjb21wbGV4IG51bWJlciB6ID0gYSArIGpiIGlzIHBsb3R0ZWQgdXNpbmcgQ2FydGVzaWFuIGNvb3JkaW5hdGVzIChhLCBiKTogcmVhbCBwYXJ0IG9uIHRoZSBob3Jpem9udGFsIGF4aXMsIGltYWdpbmFyeSBwYXJ0IG9uIHRoZSB2ZXJ0aWNhbCBheGlzLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgcmV2ZXJzZXMgdGhlIGF4ZXMuIiwiQyI6IlRoaXMgY29sbGFwc2VzIHR3byBjb29yZGluYXRlcyBpbnRvIG9uZSBheGlzIHZhbHVlLiIsIkQiOiJyIGFuZCDOuCBhcmUgcG9sYXIgY29vcmRpbmF0ZXMsIG5vdCBDYXJ0ZXNpYW4gcG9pbnQgbGFiZWxzLiJ9LCJoaW50IjoiSG9yaXpvbnRhbCBpcyByZWFsLCB2ZXJ0aWNhbCBpcyBpbWFnaW5hcnkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImNvbXBsZXhfcGxhbmVfcG9pbnQiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiB6ID0gYSArIGpiLCB3aGF0IGlzIGl0cyBjb21wbGV4IGNvbmp1Z2F0ZSB6KiBhY2NvcmRpbmcgdG8gdGhlIGZpZ3VyZT8iLCJvcHRpb25zIjpbIkEuIHoqID0gLWEgKyBqYiIsIkIuIHoqID0gYSAtIGpiIiwiQy4geiogPSAtYSAtIGpiIiwiRC4geiogPSBiICsgamEiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgY29uanVnYXRlIGtlZXBzIHRoZSByZWFsIHBhcnQgdGhlIHNhbWUgYW5kIGZsaXBzIHRoZSBzaWduIG9mIHRoZSBpbWFnaW5hcnkgcGFydCwgd2hpY2ggcmVmbGVjdHMgdGhlIHBvaW50IGFjcm9zcyB0aGUgcmVhbCBheGlzLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgZmxpcHMgdGhlIHJlYWwgcGFydCBpbnN0ZWFkIG9mIHRoZSBpbWFnaW5hcnkgcGFydC4iLCJDIjoiVGhpcyBmbGlwcyBib3RoIHBhcnRzLCB3aGljaCBpcyBhIHJvdGF0aW9uIHRvIHRoZSBvcHBvc2l0ZSBxdWFkcmFudCwgbm90IGEgY29uanVnYXRlIHJlZmxlY3Rpb24uIiwiRCI6IlRoaXMgc3dhcHMgdGhlIGNvb3JkaW5hdGVzLiJ9LCJoaW50IjoiVGhpbms6IG1pcnJvciBhY3Jvc3MgdGhlIHJlYWwgYXhpcy4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiY29tcGxleF9wbGFuZV9jb25qdWdhdGVfcmVmbGVjdGlvbiIsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6InBvbGFyX2NvbnZlcnNpb24iLCJsYWJlbCI6IlJlbGF0ZSByZWN0YW5ndWxhciBjb29yZGluYXRlcyB0byBwb2xhciBmb3JtIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiBhIGNvbXBsZXggbnVtYmVyIGhhcyBwb2xhciBjb29yZGluYXRlcyAociwgzrgpLCB3aGljaCBwYWlyIGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBhID0gciBzaW4gzrgsIGIgPSByIGNvcyDOuCIsIkIuIGEgPSByIGNvcyDOuCwgYiA9IHIgc2luIM64IiwiQy4gYSA9IGNvcyhyzrgpLCBiID0gc2luKHLOuCkiLCJELiBhID0gciB0YW4gzrgsIGIgPSByIGNvdCDOuCJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgY29tZXMgZnJvbSBjb3NpbmUgYW5kIHRoZSB2ZXJ0aWNhbCBjb29yZGluYXRlIGNvbWVzIGZyb20gc2luZSwgc28gYSA9IHIgY29zIM64IGFuZCBiID0gciBzaW4gzrguIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBzd2FwcyBjb3NpbmUgYW5kIHNpbmUuIiwiQyI6IlRoaXMgaXMgbm90IHRoZSBjb29yZGluYXRlIHJlbGF0aW9uIHVzZWQgaW4gcG9sYXIgZm9ybS4iLCJEIjoiVGFuZ2VudCBhbmQgY290YW5nZW50IGFyZSBub3QgdGhlIGNvb3JkaW5hdGUgZm9ybXVsYXMuIn0sImhpbnQiOiJUaGluayBvZiB4ID0gciBjb3MgzrggYW5kIHkgPSByIHNpbiDOuCBmcm9tIHN0YW5kYXJkIHBvbGFyIGNvb3JkaW5hdGVzLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggZXhwcmVzc2lvbiBpcyB0aGUgY29ycmVjdCBwb2xhci1mb3JtIHJld3JpdGUgb2YgeiA9IGEgKyBqYj8iLCJvcHRpb25zIjpbIkEuIHogPSByKGNvcyDOuCArIGogc2luIM64KSIsIkIuIHogPSByKHNpbiDOuCArIGogY29zIM64KSIsIkMuIHogPSBhKGNvcyDOuCArIGogc2luIM64KSIsIkQuIHogPSByKGNvcyDOuCAtIGogc2luIM64KSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlN1YnN0aXR1dGluZyBhID0gciBjb3MgzrggYW5kIGIgPSByIHNpbiDOuCBpbnRvIHogPSBhICsgamIgZ2l2ZXMgeiA9IHIoY29zIM64ICsgaiBzaW4gzrgpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoaXMgc3dhcHMgdGhlIGNvc2luZSBhbmQgc2luZSByb2xlcy4iLCJDIjoiVGhlIHNjYWxlIGZhY3RvciBzaG91bGQgYmUgciwgbm90IGEuIiwiRCI6IlRoZSBtaW51cyBzaWduIHdvdWxkIGNvcnJlc3BvbmQgdG8gcmVmbGVjdGlvbiBhY3Jvc3MgdGhlIHJlYWwgYXhpcy4ifSwiaGludCI6IlJlcGxhY2UgYSBhbmQgYiB1c2luZyB0aGUgcG9sYXItY29vcmRpbmF0ZSBmb3JtdWxhcy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImV1bGVyX2Zvcm11bGFfcmVjb2duaXRpb24iLCJsYWJlbCI6IlJlY29nbml6ZSBFdWxlcidzIGZvcm11bGEgYXMgc2hvcnRoYW5kIGZvciB0aGUgcG9sYXIgZXhwcmVzc2lvbiIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDRfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkV1bGVyJ3MgZm9ybXVsYSBzdGF0ZXMgdGhhdCIsIm9wdGlvbnMiOlsiQS4gZV57as64fSA9IGNvcyDOuCAtIGogc2luIM64IiwiQi4gZV57as64fSA9IGooY29zIM64ICsgc2luIM64KSIsIkMuIGVee2rOuH0gPSBjb3MgzrggKyBqIHNpbiDOuCIsIkQuIGVee2rOuH0gPSByKGNvcyDOuCArIGogc2luIM64KSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IkV1bGVyJ3MgZm9ybXVsYSBpcyBleGFjdGx5IGVee2rOuH0gPSBjb3MgzrggKyBqIHNpbiDOuCwgd2hpY2ggY29tcHJlc3NlcyB0aGUgdHJpZ29ub21ldHJpYyBmb3JtIGludG8gZXhwb25lbnRpYWwgbm90YXRpb24uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIHNpZ24gaXMgd3JvbmcgZm9yIHRoZSBzdGFuZGFyZCBwb3NpdGl2ZS1hbmdsZSBmb3JtLiIsIkIiOiJUaGlzIGluY29ycmVjdGx5IGZhY3RvcnMgb3V0IGouIiwiRCI6IlRoZSBmYWN0b3IgciBpcyBwYXJ0IG9mIHRoZSBmdWxsIHBvbGFyIGZvcm0geiA9IHIgZV57as64fSwgbm90IEV1bGVyJ3MgZm9ybXVsYSBpdHNlbGYuIn0sImhpbnQiOiJNYXRjaCB0aGUgY29zaW5lLXNpbmUgZXhwcmVzc2lvbiBleGFjdGx5LiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%

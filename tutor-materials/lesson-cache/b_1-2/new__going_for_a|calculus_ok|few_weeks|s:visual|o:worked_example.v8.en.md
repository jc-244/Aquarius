# B.1-2 Algebra of Complex Numbers

> **Section Objective:** Master the two coordinate systems for complex numbers — rectangular and polar — and learn to switch between them fluently.

---

Take the number **z = 3 + 4j**. You already know this is a point on the complex plane. But here is the key insight this section builds on: that same point can be described in two completely different ways, and choosing the right one can cut your exam work in half.

**Rectangular form** (a + jb) tells you how far to go horizontally and vertically. **Polar form** (r, θ) tells you how far from the origin and in what direction. Same point, two passports.

This section also introduces two essential tools: the **complex conjugate** — a reflection that shows up constantly in signal processing — and **Euler's formula**, which compresses the polar form into a single compact exponential. Both will simplify derivations throughout the course.

### EXAM TIP

Many exam problems become one-line solutions once you rewrite a complex number in the most convenient form. Knowing when to switch is the skill.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*A single diagram connects all three ideas: the point z = a + jb sits at rectangular coordinates (a, b) with magnitude r and angle θ from the real axis, while its conjugate z* = a − jb appears as the mirror image directly below, reflected across the real axis.*

## 1. One Number, Two Descriptions

Start with **z = 3 + 4j**.

In **rectangular form**, the two ingredients are straightforward:
- **a = 3** — the horizontal (real) coordinate
- **b = 4** — the vertical (imaginary) coordinate; note that b is the *coefficient* of j, not the full term 4j

Rectangular form answers the question: *how much horizontal, how much vertical?*

In **polar form**, the two ingredients describe the same point differently:
- **r** — the straight-line distance from the origin to the point
- **θ** — the angle that line makes with the positive real axis

Polar form answers the question: *how far, and in what direction?*

#### Warning

**r is not the real part.** r is the total distance from the origin — it depends on *both* a and b. Confusing r with a is one of the most common errors on exams.

#### Note

**b is not bj.** The imaginary part is the real number b = 4, not the term 4j. The j is a label for the axis, not part of the coordinate value.

$$a = r\cos\theta, \qquad b = r\sin\theta, \qquad z = a + jb = r(\cos\theta + j\sin\theta)$$
*Think of r as the hypotenuse of a right triangle: projecting it onto the real axis gives the horizontal leg a = r cos θ, and projecting it onto the imaginary axis gives the vertical leg b = r sin θ. Once you have those two projections, substituting them directly into a + jb replaces the rectangular coordinates with their polar equivalents, producing the polar form r(cos θ + j sin θ) — the same point, now described entirely by distance and angle.*

## 2. From Geometry to Algebra: Polar Form and Euler's Formula

Let us work through the full conversion for **z = 3 + 4j**, step by step.

**Step 1 — Identify the rectangular coordinates.**

a = 3, b = 4

**Step 2 — Compute the magnitude r.**

r is the distance from the origin to the point (3, 4). By the Pythagorean theorem:

r = √(3² + 4²) = √(9 + 16) = √25 = **5**

Notice: r = 5, not 3. The real part alone is not the magnitude.

**Step 3 — Find the angle θ.**

θ is the angle whose tangent equals b/a:

tan θ = 4/3, so θ = arctan(4/3) ≈ 53.13°

**Step 4 — Write the polar form.**

z = 5(cos θ + j sin θ), where tan θ = 4/3

**Step 5 — Apply Euler's formula.**

Euler's formula states that e^{jθ} = cos θ + j sin θ, so the polar form compresses to:

z = 5e^{jθ}

This exponential notation is compact and extremely useful in later manipulations involving multiplication and division of complex numbers.

### EXAM TIP

Use **rectangular form** when adding or subtracting complex numbers — just combine like terms. Switch to **polar or exponential form** when multiplying, dividing, or raising to a power, because magnitudes multiply and angles add.

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula is not a separate, unrelated object — it is simply a shorthand for the point on the unit circle at angle θ. On the unit circle, r = 1, so the point sits at (cos θ, sin θ), which is exactly cos θ + j sin θ. When you multiply by r, you scale that unit-circle point outward to the correct distance from the origin, giving the full complex number z = re^{jθ} with magnitude r and angle θ.*

## 3. Complex Conjugate as a Reflection

Given **z = a + jb**, its **complex conjugate** is defined as:

z* = a − jb

The rule is simple: keep the real part exactly as it is, and flip the sign of the imaginary part.

**Worked check with z = 3 + 4j:**

z* = 3 − 4j

Look at the textbook figure above. The original point z sits above the real axis at height +4. Its conjugate z* sits below the real axis at depth −4, at the same horizontal position. This is a **reflection across the real axis** — nothing more, nothing less.

### KEY INSIGHT

In polar language, conjugation leaves the magnitude unchanged but reverses the angle:

- z = re^{jθ} has magnitude r and angle θ
- z* = re^{−jθ} has the same magnitude r but angle −θ

The point moves to the mirror image below the real axis, but stays the same distance from the origin.

---
**📌 Key Takeaways**
- Rectangular form (a + jb) gives coordinates; polar form (r, θ) gives distance and angle — same point.
- r is the total distance from the origin, not the real part a; b is the coefficient of j, not the term jb.
- The conjugate z* = a − jb reflects the point across the real axis, reversing the angle but keeping r.

*In the next section we will explore operations on complex numbers — addition, multiplication, and division — and see how switching between rectangular and polar form makes each operation straightforward.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3ZzX3BvbGFyX3JvbGVzIiwibGFiZWwiOiJNZWFuaW5nIG9mIGEsIGIsIHIsIGFuZCDOuCIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSBhICsgamIgPSByKGNvc864ICsgaiBzaW7OuCksIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gciBpcyB0aGUgcmVhbCBwYXJ0IGFuZCBhIGlzIHRoZSBtYWduaXR1ZGUiLCJCLiBhIGFuZCBiIGFyZSBDYXJ0ZXNpYW4gY29vcmRpbmF0ZXMsIHdoaWxlIHIgYW5kIM64IGFyZSBwb2xhciBjb29yZGluYXRlcyBvZiB0aGUgc2FtZSBwb2ludCIsIkMuIGIgaXMgdGhlIGZ1bGwgdGVybSBqYiIsIkQuIM64IGlzIHRoZSBpbWFnaW5hcnkgcGFydCJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSBzYW1lIGNvbXBsZXggbnVtYmVyIGNhbiBiZSBkZXNjcmliZWQgZWl0aGVyIGJ5IHJlY3Rhbmd1bGFyIGNvb3JkaW5hdGVzIChhLCBiKSBvciBieSBwb2xhciBjb29yZGluYXRlcyAociwgzrgpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgc3dhcHMgdGhlIG1lYW5pbmdzLiBhIGlzIHRoZSByZWFsIHBhcnQ7IHIgaXMgdGhlIG1hZ25pdHVkZS4iLCJDIjoiVGhlIGltYWdpbmFyeSBwYXJ0IGlzIGIsIHRoZSBjb2VmZmljaWVudCBvZiBqLiBUaGUgdGVybSBpbiB0aGUgZXhwcmVzc2lvbiBpcyBqYi4iLCJEIjoizrggaXMgYW4gYW5nbGUsIG5vdCB0aGUgaW1hZ2luYXJ5IHBhcnQuIn0sImhpbnQiOiJBc2sgd2hpY2ggc3ltYm9scyBkZXNjcmliZSBjb29yZGluYXRlcyBvbiBheGVzIGFuZCB3aGljaCBkZXNjcmliZSBkaXN0YW5jZS1wbHVzLWFuZ2xlLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBzdHVkZW50IHNheXM6ICdJbiB6ID0gMyArIDRqLCB0aGUgbWFnbml0dWRlIGlzIDMgYmVjYXVzZSAzIGlzIHRoZSByZWFsIHBhcnQuJyBXaGF0IGlzIHRoZSBiZXN0IGNvcnJlY3Rpb24/Iiwib3B0aW9ucyI6WyJBLiBDb3JyZWN0OyBtYWduaXR1ZGUgYWx3YXlzIGVxdWFscyB0aGUgcmVhbCBwYXJ0IiwiQi4gSW5jb3JyZWN0OyB0aGUgbWFnbml0dWRlIGlzIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4sIG5vdCB0aGUgcmVhbCBwYXJ0IiwiQy4gSW5jb3JyZWN0OyB0aGUgbWFnbml0dWRlIGlzIDQgYmVjYXVzZSA0IG11bHRpcGxpZXMgaiIsIkQuIEluY29ycmVjdDsgdGhlIG1hZ25pdHVkZSBpcyDOuCJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6Ik1hZ25pdHVkZSBtZWFucyBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4gaW4gdGhlIGNvbXBsZXggcGxhbmUuIEZvciAzICsgNGosIGl0IGlzIG5vdCBqdXN0IG9uZSBjb29yZGluYXRlIOKAlCBpdCBpcyByID0g4oiaKDPCsiArIDTCsikgPSA1LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6Ik1hZ25pdHVkZSBpcyBub3QgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSByZWFsIHBhcnQuIiwiQyI6IlRoZSBpbWFnaW5hcnkgY29lZmZpY2llbnQgYWxvbmUgaXMgbm90IHRoZSBtYWduaXR1ZGUgZWl0aGVyLiIsIkQiOiLOuCBpcyB0aGUgYW5nbGUsIG5vdCB0aGUgbWFnbml0dWRlLiJ9LCJoaW50IjoiVGhpbmsgb2YgYSBwb2ludCBpbiB0aGUgcGxhbmU6IG9uZSBjb29yZGluYXRlIGlzIG5vdCB0aGUgZnVsbCBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4uIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJyZWN0YW5ndWxhcl90b19wb2xhcl9jb252ZXJzaW9uIiwibGFiZWwiOiJDb252ZXJ0aW5nIHJlY3Rhbmd1bGFyIGZvcm0gdG8gcG9sYXIgZm9ybSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgeiA9IDMgKyA0aiwgd2hpY2ggcG9sYXItZm9ybSBzdGF0ZW1lbnQgaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIHIgPSA3IGFuZCB0YW7OuCA9IDMvNCIsIkIuIHIgPSA1IGFuZCB0YW7OuCA9IDQvMyIsIkMuIHIgPSA1IGFuZCB0YW7OuCA9IDMvNCIsIkQuIHIgPSAyNSBhbmQgdGFuzrggPSA0LzMiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJVc2luZyBhID0gMyBhbmQgYiA9IDQgZ2l2ZXMgciA9IOKImigzwrIgKyA0wrIpID0gNSwgYW5kIHRhbs64ID0gYi9hID0gNC8zLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6Ik1hZ25pdHVkZSBpcyBub3QgZm91bmQgYnkgYWRkaW5nIGNvb3JkaW5hdGVzIGRpcmVjdGx5LCBhbmQgdGhlIHRhbmdlbnQgcmF0aW8gaXMgcmV2ZXJzZWQuIiwiQyI6IlRoZSBtYWduaXR1ZGUgaXMgY29ycmVjdCwgYnV0IHRhbs64IHNob3VsZCBiZSBiL2EgPSA0LzMsIG5vdCBhL2IuIiwiRCI6IjI1IGlzIHLCsiwgbm90IHIuIFlvdSBtdXN0IHRha2UgdGhlIHNxdWFyZSByb290LiJ9LCJoaW50IjoiVXNlIHRoZSByaWdodCB0cmlhbmdsZSBmb3JtZWQgYnkgdGhlIHBvaW50IGFuZCB0aGUgYXhlczogdGhlIGh5cG90ZW51c2UgaXMgciwgYW5kIHRoZSBvcHBvc2l0ZSBzaWRlIG92ZXIgdGhlIGFkamFjZW50IHNpZGUgZ2l2ZXMgdGFuzrguIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InB5dGhvbl9tYXRwbG90bGliIGNvbXBsZXgtcGxhbmUgcG9pbnQgd2l0aCByaWdodCB0cmlhbmdsZSJ9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkNvbnZlcnQgeiA9IDMgKyA0aiBpbnRvIHRoZSBmb3JtIHIoY29zzrggKyBqIHNpbs64KSwgc2hvd2luZyBldmVyeSBzdGVwLiIsImlkZWFsX2Fuc3dlciI6IklkZW50aWZ5IGEgPSAzIGFuZCBiID0gNC4gVGhlbiByID0g4oiaKGHCsiArIGLCsikgPSDiiJooM8KyICsgNMKyKSA9IOKImjI1ID0gNS4gTmV4dCwgdGFuzrggPSBiL2EgPSA0LzMsIHNvIM64IGlzIHRoZSBhbmdsZSB3aG9zZSB0YW5nZW50IGlzIDQvMy4gU3Vic3RpdHV0ZSBpbnRvIHRoZSBwb2xhciBmb3JtOiB6ID0gcihjb3POuCArIGogc2luzrgpID0gNShjb3POuCArIGogc2luzrgpLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3QgaWRlbnRpZnkgYSA9IDMgYW5kIGIgPSA0IiwiTXVzdCBjb21wdXRlIHIgPSA1IGNvcnJlY3RseSBmcm9tIOKImigzwrIgKyA0wrIpIiwiTXVzdCBzdGF0ZSB0YW7OuCA9IDQvMyBvciBlcXVpdmFsZW50IGFuZ2xlIGluZm9ybWF0aW9uIiwiTXVzdCB3cml0ZSB0aGUgZmluYWwgcG9sYXIgZm9ybSBjb3JyZWN0bHkgYXMgNShjb3POuCArIGogc2luzrgpIl0sImV4cGxhbmF0aW9uIjoiVGhpcyB2ZXJpZmllcyB0aGF0IHRoZSBzdHVkZW50IGNhbiBleGVjdXRlIHRoZSBmdWxsIGNvbnZlcnNpb24gcHJvY2VkdXJlIGluc3RlYWQgb2YgcmVjb2duaXppbmcgb25seSB0aGUgZmluYWwgYW5zd2VyLiIsImhpbnQiOiJGaXJzdCBmaW5kIHRoZSBsZW5ndGggciB1c2luZyB0aGUgUHl0aGFnb3JlYW4gdGhlb3JlbSwgdGhlbiBmaW5kIHRoZSBhbmdsZSB1c2luZyB0aGUgdGFuZ2VudCByYXRpbywgdGhlbiBzdWJzdGl0dXRlIGJvdGggaW50byB0aGUgc3RhbmRhcmQgcG9sYXIgZm9ybS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImV1bGVyX2FuZF9jb25qdWdhdGUiLCJsYWJlbCI6IkV1bGVyIGZvcm0gYW5kIGNvbmp1Z2F0ZSBnZW9tZXRyeSIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIHogPSByKGNvc864ICsgaiBzaW7OuCksIHdoaWNoIGV4cHJlc3Npb24gaXMgZXF1YWwgdG8geiBieSBFdWxlcidzIGZvcm11bGE/Iiwib3B0aW9ucyI6WyJBLiByZV57LWrOuH0iLCJCLiByKGNvc864IOKIkiBqIHNpbs64KSIsIkMuIHJlXntqzrh9IiwiRC4gZV57cs64fSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IkV1bGVyJ3MgZm9ybXVsYSBnaXZlcyBlXntqzrh9ID0gY29zzrggKyBqIHNpbs64LCBzbyBtdWx0aXBseWluZyBieSByIGdpdmVzIHogPSByZV57as64fS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJyZV57LWrOuH0gY29ycmVzcG9uZHMgdG8gY29zzrgg4oiSIGogc2luzrgsIHdoaWNoIGlzIHRoZSBjb25qdWdhdGUgZGlyZWN0aW9uLCBub3QgdGhlIG9yaWdpbmFsIG51bWJlci4iLCJCIjoiQ2hhbmdpbmcgdGhlIHNpZ24gb2YgaiBzaW7OuCBnaXZlcyB0aGUgY29uanVnYXRlIHoqLCBub3QgeiBpdHNlbGYuIiwiRCI6ImVee3LOuH0gaXMgbm90IEV1bGVyJ3MgZm9ybXVsYSDigJQgdGhlIGV4cG9uZW50IG11c3QgYmUgaW1hZ2luYXJ5IChqzrgpLCBub3QgcmVhbC4ifSwiaGludCI6Ik1hdGNoIHRoZSBzaWduIGluIGZyb250IG9mIGogc2luzrggY2FyZWZ1bGx5OiB0aGUgb3JpZ2luYWwgcG9sYXIgZm9ybSBoYXMgK2ogc2luzrgsIHNvIHRoZSBleHBvbmVudCBtdXN0IGJlICtqzrguIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggc3RhdGVtZW50IGFib3V0IHRoZSBjb25qdWdhdGUgb2YgeiA9IGEgKyBqYiBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4geiogPSDiiJJhICsgamIsIGEgcmVmbGVjdGlvbiBhY3Jvc3MgdGhlIGltYWdpbmFyeSBheGlzIiwiQi4geiogPSBhIOKIkiBqYiwgYSByZWZsZWN0aW9uIGFjcm9zcyB0aGUgcmVhbCBheGlzIiwiQy4geiogPSDiiJJhIOKIkiBqYiwgYSByb3RhdGlvbiBieSAxODAgZGVncmVlcyIsIkQuIHoqID0gYSArIGpiLCB1bmNoYW5nZWQgZm9yIGV2ZXJ5IGNvbXBsZXggbnVtYmVyIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiQ29uanVnYXRpb24gY2hhbmdlcyB0aGUgc2lnbiBvZiB0aGUgaW1hZ2luYXJ5IHBhcnQgd2hpbGUga2VlcGluZyB0aGUgcmVhbCBwYXJ0IGZpeGVkLCB3aGljaCByZWZsZWN0cyB0aGUgcG9pbnQgYWNyb3NzIHRoZSByZWFsIGF4aXMuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiQ2hhbmdpbmcgdGhlIHJlYWwgcGFydCBzaWduIHdvdWxkIHJlZmxlY3QgYWNyb3NzIHRoZSBpbWFnaW5hcnkgYXhpcyDigJQgdGhhdCBpcyBhIGRpZmZlcmVudCBvcGVyYXRpb24sIG5vdCBjb25qdWdhdGlvbi4iLCJDIjoiQ2hhbmdpbmcgYm90aCBzaWducyBnaXZlcyB0aGUgcG9pbnQgZGlhbWV0cmljYWxseSBvcHBvc2l0ZSB0aHJvdWdoIHRoZSBvcmlnaW4sIG5vdCB0aGUgY29uanVnYXRlLiIsIkQiOiJPbmx5IHB1cmVseSByZWFsIG51bWJlcnMgKHdoZXJlIGIgPSAwKSByZW1haW4gdW5jaGFuZ2VkIHVuZGVyIGNvbmp1Z2F0aW9uLiJ9LCJoaW50IjoiTG9vayBhdCB0aGUgdGV4dGJvb2sgZmlndXJlOiB3aGljaCBjb29yZGluYXRlIGNoYW5nZXMgc2lnbiB3aGVuIHlvdSByZWZsZWN0IGFjcm9zcyB0aGUgcmVhbCBheGlzPyIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJib29rIGZpZ3VyZSBzaG93aW5nIHogYW5kIHoqIHJlZmxlY3RlZCBhY3Jvc3MgcmVhbCBheGlzIn1dfV19" style="display:none;"></div>%%KC_END%%

# B.1-2 Algebra of Complex Numbers

> **Objective:** Master the two algebraic descriptions of a complex number — rectangular and polar form — and move fluently between them.

Take z = 3 + 4j. You can describe this number in two equally valid ways: by its horizontal and vertical components (3 steps right, 4 steps up), or by its total distance from the origin and the angle it makes with the positive real axis. Both descriptions refer to the exact same point.

This section covers the algebra behind those two descriptions: **rectangular form** z = a + jb and **polar form** z = r(cos θ + j sin θ).

### WHY THIS MATTERS FOR THE EXAM

Exam questions routinely ask you to identify Re(z), Im(z), the magnitude r, and the angle θ — and to convert between forms. The most common trap is confusing r (total distance from origin) with a (horizontal coordinate only). Know the difference cold before moving on.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*The complex plane showing point z = a + jb at coordinates (a, b), with magnitude r as the distance from the origin to the point, angle θ measured from the positive real axis, and conjugate z* = a − jb reflected symmetrically across the real axis.*

## 1. Rectangular Form vs Polar Form

Start with the concrete example: z = 3 + 4j. Here, **a = 3** and **b = 4**. In general, any complex number written as z = a + jb is in **rectangular form**, where a and b are ordinary real numbers.

> **Definition:** For z = a + jb, the **real part** is Re(z) = a, and the **imaginary part** is Im(z) = b.

### COMMON MISTAKE

Students often write Im(z) = bj. This is wrong. The imaginary part is the **coefficient** b — a plain real number. The full term jb is called the *imaginary term*. The imaginary part itself never carries the j.

---

The same point can also be described in **polar language**: instead of recording where you land horizontally and vertically, you record how far you travel from the origin (that distance is **r**) and in what direction (that angle is **θ**, measured counterclockwise from the positive real axis).

#### Critical Distinction

- **a** is the horizontal coordinate only — it can be negative, zero, or positive.
- **r** is the total distance from the origin — it is always non-negative.

These two quantities are generally different. Do not substitute one for the other.

$$z = a + jb, \quad \operatorname{Re}(z)=a, \quad \operatorname{Im}(z)=b$$
*Rectangular form records the horizontal component a and the vertical component b of the complex number directly as coordinates on the complex plane.*

## 2. Connecting Coordinates to Magnitude and Angle

Look at the figure: the point z = a + jb, the origin, and the foot of the vertical dashed line form a right triangle. The sides of that triangle are:

- **Horizontal side:** length a (the real part)
- **Vertical side:** length b (the imaginary part)
- **Hypotenuse:** length r (the magnitude)
- **Angle at origin:** θ

From basic trigonometry, cosine equals adjacent over hypotenuse and sine equals opposite over hypotenuse. Multiplying both sides by r recovers the actual side lengths:

$$a = r\cos\theta \qquad b = r\sin\theta$$

Now substitute these directly into z = a + jb, one step at a time:

$$z = a + jb = r\cos\theta + j(r\sin\theta) = r\cos\theta + jr\sin\theta = r(\cos\theta + j\sin\theta)$$

That final expression is the **polar form** of z.

### KEY INSIGHT

**r is not the real part.** r is the magnitude — the full length of the hypotenuse. The real part a is only the horizontal leg. Confusing them is the single most common error on this topic.

$$a = r\cos\theta, \quad b = r\sin\theta, \quad z = r(\cos\theta + j\sin\theta)$$
*These formulas convert the same complex number from coordinate language (horizontal a, vertical b) into length-angle language (magnitude r, direction θ), using the right-triangle geometry of the complex plane.*

## 3. Euler Form and the Complex Conjugate

In polar form, the expression cos θ + j sin θ appears constantly. **Euler's formula** gives it a compact name:

$$e^{j\theta} = \cos\theta + j\sin\theta$$

This is not a new number system — it is purely shorthand. Wherever you see cos θ + j sin θ, you can write e^{jθ} instead. The full polar form then becomes:

$$z = re^{j\theta}$$

This is called the **Euler form** (or exponential form) of a complex number.

---

Now look again at the figure. Notice the point z* sitting below the real axis, directly mirroring z. This is the **complex conjugate**:

$$z^* = a - jb$$

The real part stays the same; the sign of the imaginary part flips. Geometrically, z* is the reflection of z across the real axis.

**Worked example:** If z = 3 + 4j, then z* = 3 − 4j.

### EXAM TIP

Exam questions often show a diagram with two mirrored points and ask which is the conjugate, or give z in rectangular form and ask for z*. In both cases: keep a, negate b.

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula compresses the full cosine-sine description of the angle θ into a single compact exponential expression, making polar-form algebra significantly easier to write and manipulate.*

---
**📌 Key Takeaways**
- Rectangular form z = a + jb: Re(z) = a, Im(z) = b (never bj).
- Polar form z = r(cos θ + j sin θ): r is magnitude, θ is angle from positive real axis.
- a is horizontal coordinate only; r is total distance from origin — they differ.
- Conjugate z* = a − jb: same real part, opposite imaginary part, reflected across real axis.
- Euler form: e^{jθ} = cos θ + j sin θ, so z = re^{jθ} is compact polar notation.

*Likely exam tasks: identify Re(z) and Im(z) from rectangular form; compute r and θ from a and b; write the conjugate of a given complex number. In the next section we will build on these forms to do more with complex-number operations.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJJZGVudGlmeSByZWFsIHBhcnQsIGltYWdpbmFyeSBwYXJ0LCBhbmQgcmVjdGFuZ3VsYXIgZm9ybSBjb21wb25lbnRzIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgeiA9IDYgLSA1aiwgd2hpY2ggc3RhdGVtZW50IGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBSZSh6KSA9IDYgYW5kIEltKHopID0gLTUiLCJCLiBSZSh6KSA9IDYgYW5kIEltKHopID0gLTVqIiwiQy4gUmUoeikgPSAtNSBhbmQgSW0oeikgPSA2IiwiRC4gUmUoeikgPSAwIGFuZCBJbSh6KSA9IC01Il0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiSW4geiA9IGEgKyBqYiwgdGhlIHJlYWwgcGFydCBpcyB0aGUgY29lZmZpY2llbnQgd2l0aG91dCBqLCBhbmQgdGhlIGltYWdpbmFyeSBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudCBvZiBqLiBTbyBSZSh6KSA9IDYgYW5kIEltKHopID0gLTUuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhpcyBjb25mdXNlcyB0aGUgaW1hZ2luYXJ5IHBhcnQgd2l0aCB0aGUgZnVsbCBpbWFnaW5hcnkgdGVybS4gVGhlIGltYWdpbmFyeSBwYXJ0IGlzIHRoZSByZWFsIG51bWJlciAtNSwgbm90IC01ai4iLCJDIjoiVGhpcyBzd2FwcyB0aGUgcmVhbCBhbmQgaW1hZ2luYXJ5IGNvbXBvbmVudHMuIiwiRCI6IlRoZSByZWFsIHBhcnQgaXMgY2xlYXJseSA2LCBub3QgMC4ifSwiaGludCI6IlJlYWQgb2ZmIHRoZSBjb2VmZmljaWVudCBvZiBqLCBub3QgdGhlIHdob2xlIHRlcm0uIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJBIHN0dWRlbnQgc2F5czogJ0ZvciB6ID0gMiArIDdqLCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgN2ouJyBDb3JyZWN0IHRoaXMgc3RhdGVtZW50IHByZWNpc2VseS4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgNywgYmVjYXVzZSBJbSh6KSBpcyB0aGUgY29lZmZpY2llbnQgb2Ygai4gVGhlIHRlcm0gN2ogaXMgdGhlIGltYWdpbmFyeSB0ZXJtLCBub3QgdGhlIGltYWdpbmFyeSBwYXJ0IGl0c2VsZi4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IHN0YXRlIEltKHopID0gNyIsIk11c3QgZGlzdGluZ3Vpc2ggY29lZmZpY2llbnQgZnJvbSBmdWxsIHRlcm0iLCJNdXN0IHVzZSBjb3JyZWN0IHRlcm1pbm9sb2d5OiBpbWFnaW5hcnkgcGFydCB2cyBpbWFnaW5hcnkgdGVybSJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQgdW5kZXJzdGFuZHMgdGhlIG5vdGF0aW9uIHByZWNpc2VseSBpbnN0ZWFkIG9mIHBhdHRlcm4tbWF0Y2hpbmcuIiwiaGludCI6IkFzayB3aGF0IG51bWJlciBtdWx0aXBsaWVzIGouIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJwb2xhcl9yZWxhdGlvbnMiLCJsYWJlbCI6IlJlbGF0ZSByZWN0YW5ndWxhciBjb29yZGluYXRlcyB0byBtYWduaXR1ZGUgYW5kIGFuZ2xlIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBzdGF0ZW1lbnQgY29ycmVjdGx5IGRpc3Rpbmd1aXNoZXMgYSBhbmQgciBmb3IgeiA9IGEgKyBqYiA9IHIoY29zIM64ICsgaiBzaW4gzrgpPyIsIm9wdGlvbnMiOlsiQS4gYSBhbmQgciBhbHdheXMgcmVwcmVzZW50IHRoZSBzYW1lIHF1YW50aXR5IiwiQi4gYSBpcyB0aGUgaG9yaXpvbnRhbCBjb29yZGluYXRlLCB3aGlsZSByIGlzIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4iLCJDLiBhIGlzIHRoZSBhbmdsZSwgd2hpbGUgciBpcyB0aGUgaW1hZ2luYXJ5IHBhcnQiLCJELiByIGlzIHRoZSByZWFsIHBhcnQgd2hlbmV2ZXIgYiA9IDAgb25seSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSByZWFsIHBhcnQgYSBpcyB0aGUgeC1jb29yZGluYXRlIG9uIHRoZSBjb21wbGV4IHBsYW5lLCB3aGlsZSByIGlzIHRoZSBtYWduaXR1ZGUg4oCUIHRoZSBmdWxsIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiB0byB0aGUgcG9pbnQuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhleSBhcmUgZ2VuZXJhbGx5IGRpZmZlcmVudDsgb25seSBpbiBzcGVjaWFsIGNhc2VzIGNvdWxkIHRoZXkgY29pbmNpZGUgbnVtZXJpY2FsbHkuIiwiQyI6IlRoaXMgYXNzaWducyB0aGUgd3JvbmcgbWVhbmluZ3MgdG8gYm90aCBzeW1ib2xzLiIsIkQiOiJFdmVuIGlmIGIgPSAwLCByIGlzIHN0aWxsIG1hZ25pdHVkZSwgbm90IHRoZSBkZWZpbml0aW9uIG9mIHRoZSByZWFsIHBhcnQuIn0sImhpbnQiOiJPbmUgaXMgYSBjb29yZGluYXRlOyB0aGUgb3RoZXIgaXMgYSBkaXN0YW5jZS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgcG9pbnQgcmVwcmVzZW50aW5nIHogaGFzIHBvbGFyIGNvb3JkaW5hdGVzIChyLCDOuCkuIFdoaWNoIHBhaXIgb2YgcmVjdGFuZ3VsYXIgY29vcmRpbmF0ZXMgaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIChyIHNpbiDOuCwgciBjb3MgzrgpIiwiQi4gKHIgY29zIM64LCByIHNpbiDOuCkiLCJDLiAoY29zIM64LCBzaW4gzrgpIiwiRC4gKHIsIM64KSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkZyb20gcmlnaHQtdHJpYW5nbGUgZGVmaW5pdGlvbnMsIHRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgaXMgYWRqYWNlbnQgdG8gzrgsIHNvIGEgPSByIGNvcyDOuCwgYW5kIHRoZSB2ZXJ0aWNhbCBjb29yZGluYXRlIGlzIG9wcG9zaXRlLCBzbyBiID0gciBzaW4gzrguIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBzd2FwcyBjb3NpbmUgYW5kIHNpbmUuIiwiQyI6IlRoZXNlIHdvdWxkIGJlIHRoZSBjb29yZGluYXRlcyBvbmx5IG9uIHRoZSB1bml0IGNpcmNsZSB3aGVyZSByID0gMS4iLCJEIjoiciBhbmQgzrggYXJlIHBvbGFyIGNvb3JkaW5hdGVzLCBub3QgcmVjdGFuZ3VsYXIgY29vcmRpbmF0ZXMuIn0sImhpbnQiOiJDb3NpbmUgZ2l2ZXMgdGhlIGhvcml6b250YWwgY29tcG9uZW50LiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJweXRob25fbWF0cGxvdGxpYiBjb21wbGV4LXBsYW5lIHBvaW50IHdpdGggYW5nbGUgdGhldGEsIHJhZGl1cyByLCBhbmQgcHJvamVjdGVkIGNvb3JkaW5hdGVzIGEgYW5kIGIiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImV1bGVyX2FuZF9jb25qdWdhdGUiLCJsYWJlbCI6IlVzZSBFdWxlcidzIGZvcm11bGEgYW5kIGlkZW50aWZ5IHRoZSBjb25qdWdhdGUgZ2VvbWV0cmljYWxseSIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIHogPSBhICsgamIsIHdoaWNoIGV4cHJlc3Npb24gZ2l2ZXMgaXRzIGNvbXBsZXggY29uanVnYXRlPyIsIm9wdGlvbnMiOlsiQS4gLWEgKyBqYiIsIkIuIGEgLSBqYiIsIkMuIC1hIC0gamIiLCJELiBqYiAtIGEiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgY29uanVnYXRlIGtlZXBzIHRoZSByZWFsIHBhcnQgdGhlIHNhbWUgYW5kIHJldmVyc2VzIHRoZSBzaWduIG9mIHRoZSBpbWFnaW5hcnkgcGFydCwgc28geiogPSBhIC0gamIuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBjaGFuZ2VzIHRoZSByZWFsIHBhcnQgaW5jb3JyZWN0bHkuIiwiQyI6IlRoaXMgY2hhbmdlcyBib3RoIHNpZ25zLCBub3QganVzdCB0aGUgaW1hZ2luYXJ5IHBhcnQuIiwiRCI6IlRoaXMgaXMgbm90IHRoZSBzdGFuZGFyZCBjb25qdWdhdGUgZm9ybSBhbmQgYWxzbyBjaGFuZ2VzIHRoZSBleHByZXNzaW9uIHN0cnVjdHVyZS4ifSwiaGludCI6IlJlZmxlY3QgYWNyb3NzIHRoZSByZWFsIGF4aXM6IHggc3RheXMsIHkgY2hhbmdlcyBzaWduLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJweXRob25fbWF0cGxvdGxpYiBjb21wbGV4IHBsYW5lIHNob3dpbmcgeiBhbmQgeiogbWlycm9yZWQgYWNyb3NzIHRoZSByZWFsIGF4aXMiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3AzX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJVc2luZyBFdWxlcidzIGZvcm11bGEsIHdoaWNoIGV4cHJlc3Npb24gaXMgZXF1aXZhbGVudCB0byByKGNvcyDOuCArIGogc2luIM64KT8iLCJvcHRpb25zIjpbIkEuIHJlXs64IiwiQi4gcmVee2rOuH0iLCJDLiBlXntyzrh9IiwiRC4gcihjb3MgzrggLSBqIHNpbiDOuCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJFdWxlcidzIGZvcm11bGEgc3RhdGVzIGVee2rOuH0gPSBjb3MgzrggKyBqIHNpbiDOuCwgc28gbXVsdGlwbHlpbmcgYm90aCBzaWRlcyBieSByIGdpdmVzIHJlXntqzrh9LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBleHBvbmVudCBtdXN0IGluY2x1ZGUgaiBtdWx0aXBsaWVkIGJ5IM64LCBub3QgzrggYWxvbmUuIiwiQyI6IlRoaXMgZG9lcyBub3QgbWF0Y2ggRXVsZXIncyBmb3JtdWxhIGFuZCBpbmNvcnJlY3RseSBtaXhlcyB0aGUgcm9sZXMgb2YgciBhbmQgzrguIiwiRCI6IkNoYW5naW5nIHRoZSBzaWduIG9mIHRoZSBzaW5lIHRlcm0gZ2l2ZXMgdGhlIGNvbmp1Z2F0ZSBhbmdsZSBmb3JtIGVeey1qzrh9LCBub3QgdGhlIG9yaWdpbmFsIGV4cHJlc3Npb24uIn0sImhpbnQiOiJSZXBsYWNlIGNvcyDOuCArIGogc2luIM64IHdpdGggdGhlIGV4YWN0IEV1bGVyIGV4cHJlc3Npb24uIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%

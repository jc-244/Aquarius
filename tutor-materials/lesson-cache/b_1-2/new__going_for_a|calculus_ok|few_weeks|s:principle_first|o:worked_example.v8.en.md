# B.1-2 Algebra of Complex Numbers

> **Objective:** Describe the same complex number in rectangular and polar form, identify Re(z), Im(z), r, and θ without confusion, and recognize what conjugation does geometrically.

Consider z = 3 + 4j. This single expression immediately tells you three things: the horizontal position is 3, the vertical position is 4, and the number lives at a specific point on the complex plane. What it does **not** immediately tell you is the distance from the origin — that requires one more step.

The algebra of complex numbers is about describing the same point in two connected ways: **rectangular form** (horizontal and vertical components) and **polar form** (distance and angle). These are not two different numbers — they are two languages for the same location.

This matters because exam questions frequently test whether students confuse the real part a, the imaginary part b, and the magnitude r. This section is about translating precisely between those quantities.

![Fig. B.2](/api/crop?page=book-005&fig=Fig.%20B.2)
*A single figure connecting all three representations: the point z = a + jb with horizontal coordinate a and vertical coordinate b, the radius r and angle θ defining polar form, and the reflected conjugate z* = a − jb below the real axis — rectangular form, polar form, and conjugation in one diagram.*

## 1. Rectangular Form versus Geometric Data

Start with the concrete example z = 3 + 4j and separate every quantity carefully:

1. **Real part:** Re(z) = 3 (the horizontal coordinate)
2. **Imaginary part:** Im(z) = 4 (the vertical coordinate — the coefficient of j, **not** the term 4j)
3. **Imaginary term:** 4j (the full term in the expression, which includes the symbol j)
4. **Magnitude:** r ≠ 3 and r ≠ 4 — it is the straight-line distance from the origin to the point (3, 4)

For the general form z = a + jb, the same four quantities are Re(z) = a, Im(z) = b, imaginary term = jb, and magnitude r = distance from origin.

### COMMON MISTAKE

r is **not** the same as a. The real part a is only the horizontal coordinate. The magnitude r is the length of the hypotenuse of the right triangle formed by sides a and b.

For z = 3 + 4j, the right triangle has legs 3 and 4, so:

r = √(3² + 4²) = √(9 + 16) = √25 = **5**

The magnitude is 5, not 3, not 4, and not 7.

$$z = a + jb, \qquad \mathrm{Re}(z)=a, \qquad \mathrm{Im}(z)=b$$
*Rectangular form stores the horizontal component a and vertical component b directly; the imaginary part is the real-number coefficient b alone — not the full term jb.*

## 2. From Rectangular Form to Polar Form

The same point z = 3 + 4j that sits at coordinates (3, 4) can also be described by how far it is from the origin and in what direction. This is polar form.

Start from the geometry. If a point is at (a, b), then by the definition of cosine and sine in a right triangle:

- a = r cos θ
- b = r sin θ

Now substitute these into z = a + jb:

z = r cos θ + j(r sin θ)

Factor out r:

z = r(cos θ + j sin θ)

This is the polar form. The factor r is the magnitude (distance from origin), and θ is the angle the line from the origin to the point makes with the positive real axis.

### WORKED EXAMPLE

For z = 3 + 4j:

- r = √(3² + 4²) = 5
- The angle θ satisfies tan θ = b/a = 4/3, so θ = tan⁻¹(4/3)
- Polar form: **z = 5(cos θ + j sin θ)** with θ = tan⁻¹(4/3)

### KEY INSIGHT

The real part a is only the horizontal projection of r. Saying r = a is the same error as saying the length of a ladder equals how far its base is from the wall.

$$a = r\cos\theta, \qquad b = r\sin\theta, \qquad z = r(\cos\theta + j\sin\theta)$$
*These formulas show that the same complex number can be read either as a pair of coordinates (a, b) in rectangular form or as a length-and-angle pair (r, θ) in polar form — two descriptions of one point.*

## 3. Euler Form and Complex Conjugate

The polar expression z = r(cos θ + j sin θ) can be written more compactly using **Euler's formula**:

e^{jθ} = cos θ + j sin θ

This is not a new idea — it is simply a shorthand for the same polar expression. Substituting it in:

z = re^{jθ}

Same number, more compact notation. The magnitude r and angle θ carry exactly the same meaning as before.

**Complex conjugate.** Look back at the figure: the point z = a + jb has a mirror image directly below the real axis at (a, −b). This reflected point is the complex conjugate:

z* = a − jb

Conjugation keeps the real part unchanged and flips the sign of the imaginary part. The magnitude is preserved: |z*| = r.

### EXAMPLE

For z = 3 + 4j: z* = 3 − 4j. Same horizontal position, same distance from origin, opposite vertical position.

$$e^{j\theta}=\cos\theta + j\sin\theta, \qquad z^* = a - jb$$
*Euler's formula compresses the polar expression into a single exponential, while conjugation flips the sign of the vertical component b and reflects the point across the real axis — leaving the magnitude r unchanged.*

---
**📌 Key Takeaways**
- Rectangular form: Re(z) = a, Im(z) = b (coefficient only, never jb); magnitude r = √(a² + b²)
- Polar form: z = r(cos θ + j sin θ) = re^{jθ}; r is distance from origin, not the real part a
- Complex conjugate z* = a − jb reflects z across the real axis, preserving magnitude

*In the next section we will explore how complex numbers are added, subtracted, and multiplied, and discover why multiplication in polar form corresponds to scaling and rotation.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJJZGVudGlmeSByZWFsIHBhcnQsIGltYWdpbmFyeSBwYXJ0LCBhbmQgaW1hZ2luYXJ5IHRlcm0gY29ycmVjdGx5IiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgeiA9IDcgLSA1aiwgd2hpY2ggc3RhdGVtZW50IGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBSZSh6KSA9IDcgYW5kIEltKHopID0gLTUiLCJCLiBSZSh6KSA9IDcgYW5kIEltKHopID0gLTVqIiwiQy4gUmUoeikgPSAtNSBhbmQgSW0oeikgPSA3IiwiRC4gUmUoeikgPSA3IC0gNWogYW5kIEltKHopID0gLTUiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJJbiB6ID0gYSArIGpiLCB0aGUgcmVhbCBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudCB3aXRob3V0IGogYW5kIHRoZSBpbWFnaW5hcnkgcGFydCBpcyB0aGUgcmVhbC1udW1iZXIgY29lZmZpY2llbnQgb2Ygai4gU28gUmUoeikgPSA3IGFuZCBJbSh6KSA9IC01LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IkltKHopIGlzIHRoZSBjb2VmZmljaWVudCBvZiBqLCBub3QgdGhlIGZ1bGwgdGVybSAtNWouIiwiQyI6IlRoaXMgc3dhcHMgdGhlIHJlYWwgYW5kIGltYWdpbmFyeSBjb21wb25lbnRzLiIsIkQiOiJUaGUgcmVhbCBwYXJ0IGlzIGEgcmVhbCBudW1iZXIgb25seSwgbm90IHRoZSB3aG9sZSBjb21wbGV4IGV4cHJlc3Npb24uIn0sImhpbnQiOiJTZXBhcmF0ZSB0aGUgY29lZmZpY2llbnQgZnJvbSB0aGUgc3ltYm9sIGouIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJBIHN0dWRlbnQgc2F5czogJ0ZvciB6ID0gMiArIDlqLCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgOWouJyBFeHBsYWluIHByZWNpc2VseSB3aGF0IGlzIHdyb25nIGFuZCBnaXZlIHRoZSBjb3JyZWN0IHN0YXRlbWVudC4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIHJlYWwtbnVtYmVyIGNvZWZmaWNpZW50IG9mIGosIHNvIEltKHopID0gOS4gVGhlIHRlcm0gOWogaXMgdGhlIGltYWdpbmFyeSB0ZXJtIGluIHRoZSBleHByZXNzaW9uLCBub3QgdGhlIGltYWdpbmFyeSBwYXJ0IGl0c2VsZi4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IHN0YXRlIHRoYXQgSW0oeikgPSA5IiwiTXVzdCBkaXN0aW5ndWlzaCBpbWFnaW5hcnkgcGFydCBmcm9tIGltYWdpbmFyeSB0ZXJtIiwiTXVzdCBleHBsaWNpdGx5IG1lbnRpb24gdGhhdCBqIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWUgb2YgSW0oeikiXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB3aGV0aGVyIHRoZSBzdHVkZW50IGtub3dzIHRoZSBmb3JtYWwgZGVmaW5pdGlvbiBpbnN0ZWFkIG9mIGNvcHlpbmcgc3VyZmFjZSBzeW1ib2xzLiIsImhpbnQiOiJBc2sgd2hhdCBudW1iZXIgbXVsdGlwbGllcyBqLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoibWFnbml0dWRlX3ZzX2Nvb3JkaW5hdGUiLCJsYWJlbCI6IkRpc3Rpbmd1aXNoIG1hZ25pdHVkZSByIGZyb20gaG9yaXpvbnRhbCBjb29yZGluYXRlIGEiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgY29tcGxleCBudW1iZXIgaXMgeiA9IDMgKyA0ai4gV2hpY2ggcXVhbnRpdHkgZXF1YWxzIGl0cyBtYWduaXR1ZGUgcj8iLCJvcHRpb25zIjpbIkEuIDMiLCJCLiA0IiwiQy4gNSIsIkQuIDciXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJUaGUgbWFnbml0dWRlIGlzIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW46IHIgPSBzcXJ0KDPCsiArIDTCsikgPSBzcXJ0KDkgKyAxNikgPSBzcXJ0KDI1KSA9IDUuIEl0IGlzIG5vdCB0aGUgcmVhbCBwYXJ0IG9yIHRoZSBpbWFnaW5hcnkgcGFydC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiIzIGlzIHRoZSByZWFsIHBhcnQgYSwgbm90IHRoZSBtYWduaXR1ZGUuIiwiQiI6IjQgaXMgdGhlIGltYWdpbmFyeSBwYXJ0IGIsIG5vdCB0aGUgbWFnbml0dWRlLiIsIkQiOiI3IGlzIHRoZSBzdW0gb2YgY29tcG9uZW50cywgbm90IHRoZSBFdWNsaWRlYW4gZGlzdGFuY2UuIn0sImhpbnQiOiJVc2UgdGhlIFB5dGhhZ29yZWFuIHRoZW9yZW0uIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJPbiB0aGUgY29tcGxleCBwbGFuZSwgYSBwb2ludCBoYXMgY29vcmRpbmF0ZXMgKGEsIGIpID0gKDYsIDgpLiBXaGljaCBzdGF0ZW1lbnQgaXMgdHJ1ZT8iLCJvcHRpb25zIjpbIkEuIHIgPSA2IGJlY2F1c2UgciBpcyB0aGUgaG9yaXpvbnRhbCBjb29yZGluYXRlIiwiQi4gciA9IDggYmVjYXVzZSByIGlzIHRoZSB2ZXJ0aWNhbCBjb29yZGluYXRlIiwiQy4gciA9IDEwIGJlY2F1c2UgciBpcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIiwiRC4gciA9IDE0IGJlY2F1c2UgciA9IGEgKyBiIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiRm9yIGNvb3JkaW5hdGVzICg2LCA4KSwgdGhlIG1hZ25pdHVkZSBpcyByID0gc3FydCg2wrIgKyA4wrIpID0gc3FydCgzNiArIDY0KSA9IHNxcnQoMTAwKSA9IDEwLCB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgY29uZnVzZXMgciB3aXRoIGEuIiwiQiI6IlRoaXMgY29uZnVzZXMgciB3aXRoIGIuIiwiRCI6Ik1hZ25pdHVkZSBpcyBub3QgZm91bmQgYnkgYWRkaW5nIGNvb3JkaW5hdGVzLiJ9LCJoaW50IjoiVGhpbmsgb2YgdGhlIHJpZ2h0IHRyaWFuZ2xlIGZyb20gdGhlIG9yaWdpbiB0byB0aGUgcG9pbnQuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InB5dGhvbl9tYXRwbG90bGliIGNvbXBsZXggcGxhbmUgcG9pbnQgd2l0aCByaWdodC10cmlhbmdsZSBsZWdzIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJwb2xhcl9jb252ZXJzaW9uIiwibGFiZWwiOiJCdWlsZCBwb2xhciBmb3JtIGZyb20gcmVjdGFuZ3VsYXIgY29vcmRpbmF0ZXMiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIHogPSBhICsgamIgY29ycmVzcG9uZHMgdG8gcG9sYXIgY29vcmRpbmF0ZXMgKHIsIM64KSwgd2hpY2ggZXhwcmVzc2lvbiBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4geiA9IHIgKyBqzrgiLCJCLiB6ID0gcihjb3MgzrggKyBqIHNpbiDOuCkiLCJDLiB6ID0gYShjb3MgzrggKyBqIHNpbiDOuCkiLCJELiB6ID0gcihzaW4gzrggKyBqIGNvcyDOuCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJVc2luZyBhID0gciBjb3MgzrggYW5kIGIgPSByIHNpbiDOuCBpbiB6ID0gYSArIGpiIGdpdmVzIHogPSByIGNvcyDOuCArIGoociBzaW4gzrgpID0gcihjb3MgzrggKyBqIHNpbiDOuCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiciBhbmQgzrggYXJlIG5vdCBjb21iaW5lZCBhcyByZWN0YW5ndWxhciBjb21wb25lbnRzLiIsIkMiOiJUaGUgZmFjdG9yIG91dHNpZGUgaXMgdGhlIG1hZ25pdHVkZSByLCBub3QgdGhlIGhvcml6b250YWwgY29vcmRpbmF0ZSBhLiIsIkQiOiJUaGUgY29zaW5lIGFuZCBzaW5lIHJvbGVzIGFyZSByZXZlcnNlZC4ifSwiaGludCI6IlN1YnN0aXR1dGUgYSA9IHIgY29zIM64IGFuZCBiID0gciBzaW4gzrggaW50byB6ID0gYSArIGpiLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9LHsiaWQiOiJrcDNfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkNvbnZlcnQgeiA9IDMgKyA0aiBpbnRvIHBvbGFyLXRyaWdvbm9tZXRyaWMgZm9ybS4gU2hvdyB0aGUgc3RlcHMgYW5kIGxlYXZlIHRoZSBhbmdsZSBhcyBhbiBpbnZlcnNlLXRhbmdlbnQgdmFsdWUgaWYgbmVlZGVkLiIsImlkZWFsX2Fuc3dlciI6IkZvciB6ID0gMyArIDRqLCByID0gc3FydCgzwrIgKyA0wrIpID0gNS4gQWxzbyBhID0gciBjb3MgzrggYW5kIGIgPSByIHNpbiDOuCwgc28gdGFuIM64ID0gYi9hID0gNC8zLCBnaXZpbmcgzrggPSB0YW7igbvCuSg0LzMpLiBUaGVyZWZvcmUgeiA9IDUoY29zIM64ICsgaiBzaW4gzrgpIHdpdGggzrggPSB0YW7igbvCuSg0LzMpLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3QgY29tcHV0ZSByID0gNSBjb3JyZWN0bHkiLCJNdXN0IGNvbm5lY3QgzrggdG8gdGFuIM64ID0gNC8zIG9yIM64ID0gdGFu4oG7wrkoNC8zKSIsIk11c3Qgd3JpdGUgZmluYWwgZm9ybSBhcyA1KGNvcyDOuCArIGogc2luIM64KSJdLCJleHBsYW5hdGlvbiI6IlRoaXMgdmVyaWZpZXMgZnVsbCBjb252ZXJzaW9uIGxvZ2ljLCBub3QganVzdCBtZW1vcml6aW5nIHRoZSBmaW5hbCB0ZW1wbGF0ZS4iLCJoaW50IjoiRmluZCB0aGUgZGlzdGFuY2UgZmlyc3QsIHRoZW4gdGhlIGFuZ2xlIHJlbGF0aW9uLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6ImNvbmp1Z2F0ZV9nZW9tZXRyeSIsImxhYmVsIjoiSW50ZXJwcmV0IHRoZSBjb21wbGV4IGNvbmp1Z2F0ZSBnZW9tZXRyaWNhbGx5IiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwNF9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgeiA9IGEgKyBqYiwgd2hhdCBkb2VzIHoqID0gYSAtIGpiIHJlcHJlc2VudCBvbiB0aGUgY29tcGxleCBwbGFuZT8iLCJvcHRpb25zIjpbIkEuIEEgcm90YXRpb24gYnkgOTAgZGVncmVlcyIsIkIuIEEgcmVmbGVjdGlvbiBhY3Jvc3MgdGhlIHJlYWwgYXhpcyIsIkMuIEEgcmVmbGVjdGlvbiBhY3Jvc3MgdGhlIGltYWdpbmFyeSBheGlzIiwiRC4gQSBwb2ludCB3aXRoIGRvdWJsZWQgbWFnbml0dWRlIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiQ2hhbmdpbmcgYiB0byAtYiBrZWVwcyB0aGUgaG9yaXpvbnRhbCBjb29yZGluYXRlIHRoZSBzYW1lIGFuZCBmbGlwcyBvbmx5IHRoZSB2ZXJ0aWNhbCBjb29yZGluYXRlLCB3aGljaCBpcyBleGFjdGx5IGEgcmVmbGVjdGlvbiBhY3Jvc3MgdGhlIHJlYWwgYXhpcy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJBIDkwLWRlZ3JlZSByb3RhdGlvbiBjaGFuZ2VzIGJvdGggY29vcmRpbmF0ZXMgZGlmZmVyZW50bHkuIiwiQyI6IlJlZmxlY3Rpb24gYWNyb3NzIHRoZSBpbWFnaW5hcnkgYXhpcyB3b3VsZCBjaGFuZ2UgYSB0byAtYSwgbm90IGIgdG8gLWIuIiwiRCI6IkNvbmp1Z2F0aW9uIGRvZXMgbm90IGNoYW5nZSB0aGUgbWFnbml0dWRlOyB8eip8ID0gfHp8ID0gci4ifSwiaGludCI6IkFzayB3aGljaCBjb29yZGluYXRlIGNoYW5nZXMgc2lnbi4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoicHl0aG9uX21hdHBsb3RsaWIgY29tcGxleCBwbGFuZSBzaG93aW5nIHogYW5kIHoqIHJlZmxlY3RlZCBhY3Jvc3MgcmVhbCBheGlzIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%

# B.1-2 Algebra of Complex Numbers

> **Objective:** Master the two coordinate descriptions of a complex number — rectangular and polar — and know exactly what each symbol means.

Take z = 3 + 4j as a concrete starting point. On the complex plane, this is simply the point (3, 4): 3 units along the real (horizontal) axis and 4 units along the imaginary (vertical) axis. Its magnitude r — the straight-line distance from the origin to that point — is r = √(3² + 4²) = 5. Its angle θ is measured counterclockwise from the positive real axis.

This section is about two coordinate systems that describe the same point: **rectangular form** a + jb (using horizontal and vertical coordinates) and **polar form** r(cosθ + j sinθ) (using distance and direction). Keeping these two descriptions straight matters because exams frequently test whether students confuse the real part a with the magnitude r — they are not the same thing.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*The complex plane shows z = a + jb as the point (a, b), with magnitude r as the distance from the origin to that point, angle θ measured from the positive real axis, and conjugate z* = a − jb as the mirror image reflected across the real axis — all four quantities (a, b, r, θ) are distinct and commonly tested.*

## 1. Two Ways to Describe the Same Complex Number

Start with the example z = 3 + 4j.

- **Real part:** a = 3 (the horizontal coordinate)
- **Imaginary part:** b = 4 (the vertical coordinate)

For any complex number written as z = a + jb, the definitions are:

- Re z = a
- Im z = b

Notice that Im z = b, a plain real number — not bj.

### CONNECTING TO POLAR COORDINATES

The same point can be reached by walking a distance r at angle θ from the positive real axis. The horizontal component of that walk is r cosθ, and the vertical component is r sinθ. So:

- a = r cosθ
- b = r sinθ

### COMMON MISTAKE

Students often write r = a. This is wrong. Think of it like a street address versus distance-and-direction: **a is the eastward coordinate only**, while **r is the total distance from the origin**, combining both horizontal and vertical components. For z = 3 + 4j, a = 3 but r = 5. They are never the same unless b = 0.

$$z = a + jb = r\cos\theta + jr\sin\theta = r(\cos\theta + j\sin\theta)$$
*This formula rewrites the same complex number by substituting a = r cosθ and b = r sinθ directly into the rectangular form a + jb, producing the polar form r(cosθ + j sinθ). The quantity r is the magnitude — the total distance from the origin — not the real part; do not confuse r with a.*

## 2. Polar Form, Euler's Formula, and the Conjugate

The polar form r(cosθ + j sinθ) appears frequently, but writing out cosine and sine every time is cumbersome. **Euler's formula** provides a compact shorthand:

$$e^{j\theta} = \cos\theta + j\sin\theta$$

This packages the cosine part (real component) and the sine part (imaginary component) into a single exponential expression. Substituting into the polar form gives:

$$z = re^{j\theta}$$

Same point, much shorter notation. You will see this form constantly in signals and systems work.

### THE COMPLEX CONJUGATE

Look back at Fig. B.2. The conjugate z* is the mirror image of z reflected across the real axis. Algebraically, if z = a + jb, then:

$$z^* = a - jb$$

Only the sign of the imaginary part flips. The real part a stays the same.

#### Worked Example

Let z = 2 − 2j.

- Real part: a = 2
- Imaginary part: b = −2
- Conjugate: z* = 2 + 2j (flip the sign of b)
- Conceptually, a = r cosθ and b = r sinθ, so the conjugate corresponds to angle −θ: the point is the same distance r from the origin, but reflected to the opposite side of the real axis.

> **Key fact:** The conjugate preserves the magnitude (|z*| = |z| = r) but negates the angle.

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula replaces the cosine-plus-sine combination with a single exponential, which is why the polar form of a complex number is compactly written as re^{jθ} instead of r(cosθ + j sinθ).*

Think of navigating a city grid. Rectangular form is like giving directions as **"3 blocks east and 4 blocks north"** — you specify each axis separately. Polar form is like saying **"5 blocks away, heading northeast at a certain angle"** — you specify total distance and direction instead.

Here is the critical point: the eastward distance (3 blocks) is **not** the same as the total distance from your starting point (5 blocks). The total distance accounts for both east and north components together. This is exactly the difference between the real part a and the magnitude r. When you see z = 3 + 4j, the real part a = 3 is the eastward coordinate only. The magnitude r = 5 is how far you actually traveled from the origin. Mixing them up is one of the most common errors on exams.

---
**📌 Key Takeaways**
- In z = a + jb, Re z = a and Im z = b — the imaginary part is b, never bj.
- The real part a is the horizontal coordinate only; magnitude r = √(a² + b²) is the total distance from the origin.
- Polar form r(cosθ + j sinθ) = re^{jθ}; conjugate z* = a − jb reflects the point across the real axis.

*Every complex number has two equivalent descriptions — rectangular and polar — and the magnitude r is always distinct from the real part a. In the next section we will apply these forms to operations such as multiplication and division, where polar form makes the algebra dramatically simpler.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJJZGVudGlmeSByZWFsIGFuZCBpbWFnaW5hcnkgcGFydHMgaW4gcmVjdGFuZ3VsYXIgZm9ybSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSAtMSArIDVqLCB3aGljaCBzdGF0ZW1lbnQgaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIFJlIHogPSA1IGFuZCBJbSB6ID0gLTEiLCJCLiBSZSB6ID0gLTEgYW5kIEltIHogPSA1IiwiQy4gUmUgeiA9IC0xIGFuZCBJbSB6ID0gNWoiLCJELiBSZSB6ID0gMSBhbmQgSW0geiA9IDUiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJJbiB6ID0gYSArIGpiLCB0aGUgcmVhbCBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudCB3aXRob3V0IGosIGFuZCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50IG9mIGouIFNvIFJlIHogPSAtMSBhbmQgSW0geiA9IDUuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBzd2FwcyB0aGUgcmVhbCBhbmQgaW1hZ2luYXJ5IHBhcnRzLiIsIkMiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgNSwgbm90IDVqOyA1aiBpcyB0aGUgaW1hZ2luYXJ5IHRlcm0uIiwiRCI6IlRoZSByZWFsIHBhcnQga2VlcHMgaXRzIHNpZ24sIHNvIGl0IGlzIC0xLCBub3QgMS4ifSwiaGludCI6IlJlYWQgdGhlIG51bWJlciBhcyBhICsgamIgYW5kIG1hdGNoIGNvZWZmaWNpZW50cyBjYXJlZnVsbHkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJBIHN0dWRlbnQgc2F5czogJ0ZvciB6ID0gNCAtIDNqLCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgLTNqLicgRXhwbGFpbiBwcmVjaXNlbHkgd2hhdCBpcyB3cm9uZyBhbmQgZ2l2ZSB0aGUgY29ycmVjdCBzdGF0ZW1lbnQuIiwiaWRlYWxfYW5zd2VyIjoiVGhlIGltYWdpbmFyeSBwYXJ0IGlzIHRoZSByZWFsIGNvZWZmaWNpZW50IG9mIGosIHNvIEltIHogPSAtMy4gVGhlIHRlcm0gLTNqIGlzIHRoZSBpbWFnaW5hcnkgdGVybSBpbiB0aGUgZXhwcmVzc2lvbiwgbm90IHRoZSBpbWFnaW5hcnkgcGFydCBpdHNlbGYuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBzdGF0ZSB0aGF0IEltIHogPSAtMyIsIk11c3QgZGlzdGluZ3Vpc2ggY29lZmZpY2llbnQgZnJvbSBmdWxsIHRlcm0iLCJNdXN0IGV4cGxpY2l0bHkgc2F5IC0zaiBpcyBub3QgdGhlIGltYWdpbmFyeSBwYXJ0Il0sImV4cGxhbmF0aW9uIjoiVGhpcyB0ZXN0cyBleGFjdCB0ZXJtaW5vbG9neSwgYSBjb21tb24gZXhhbSB0cmFwLiIsImhpbnQiOiJTZXBhcmF0ZSB0aGUgY29lZmZpY2llbnQgZnJvbSB0aGUgc3ltYm9sIGouIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJyZWN0YW5ndWxhcl90b19wb2xhcl9yZWxhdGlvbnNoaXAiLCJsYWJlbCI6IlJlbGF0ZSBhIGFuZCBiIHRvIHIgYW5kIM64IiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiB6IGhhcyBwb2xhciBjb29yZGluYXRlcyAociwgzrgpLCB3aGljaCBwYWlyIGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBhID0gciBzaW7OuCwgYiA9IHIgY29zzrgiLCJCLiBhID0gciBjb3POuCwgYiA9IHIgc2luzrgiLCJDLiBhID0gciwgYiA9IM64IiwiRC4gYSA9IGNvc864LCBiID0gc2luzrgiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgaG9yaXpvbnRhbCBjb29yZGluYXRlIGlzIGEgPSByIGNvc864IGFuZCB0aGUgdmVydGljYWwgY29vcmRpbmF0ZSBpcyBiID0gciBzaW7OuC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIHN3YXBzIHRoZSBjb3NpbmUgYW5kIHNpbmUgcm9sZXMgZm9yIHgtIGFuZCB5LWNvb3JkaW5hdGVzLiIsIkMiOiJyIGFuZCDOuCBhcmUgcG9sYXIgcXVhbnRpdGllcywgbm90IHJlY3Rhbmd1bGFyIGNvb3JkaW5hdGVzIGRpcmVjdGx5LiIsIkQiOiJUaGlzIHdvdWxkIG9ubHkgbWF0Y2ggdGhlIHVuaXQgY2lyY2xlIGNhc2UgciA9IDEsIG5vdCB0aGUgZ2VuZXJhbCBjYXNlLiJ9LCJoaW50IjoiVGhpbmsgb2Ygb3JkaW5hcnkgcG9sYXItdG8tQ2FydGVzaWFuIGNvbnZlcnNpb24uIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBzdGF0ZW1lbnQgYmVzdCBleHBsYWlucyB3aHkgciBpcyBub3QgdGhlIHNhbWUgYXMgYSBpbiB6ID0gYSArIGpiPyIsIm9wdGlvbnMiOlsiQS4gciBpcyB0aGUgdmVydGljYWwgY29vcmRpbmF0ZSBhbmQgYSBpcyB0aGUgaG9yaXpvbnRhbCBjb29yZGluYXRlIiwiQi4gciBpcyB0aGUgYW5nbGUgYW5kIGEgaXMgdGhlIHJlYWwgcGFydCIsIkMuIHIgaXMgdGhlIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiwgd2hpbGUgYSBpcyBvbmx5IHRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUiLCJELiByIGFsd2F5cyBlcXVhbHMgYSArIGIiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJUaGUgcmVhbCBwYXJ0IGEgbWVhc3VyZXMgaG9yaXpvbnRhbCBwb3NpdGlvbiBvbmx5LiBUaGUgbWFnbml0dWRlIHIgbWVhc3VyZXMgdG90YWwgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSB2ZXJ0aWNhbCBjb29yZGluYXRlIGlzIGIsIG5vdCByLiIsIkIiOiJUaGUgYW5nbGUgaXMgzrgsIG5vdCByLiIsIkQiOiJUaGVyZSBpcyBubyBnZW5lcmFsIHJ1bGUgciA9IGEgKyBiLiJ9LCJoaW50IjoiQ29tcGFyZSAnb25lIGF4aXMgY29tcG9uZW50JyB3aXRoICdmdWxsIGRpc3RhbmNlJy4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiY29tcGxleF9wbGFuZV9jb21wb25lbnRfdnNfbWFnbml0dWRlIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJwb2xhcl9hbmRfZXVsZXJfZm9ybXMiLCJsYWJlbCI6IlJld3JpdGUgY29tcGxleCBudW1iZXJzIGluIHBvbGFyIGFuZCBFdWxlciBmb3JtIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIGV4cHJlc3Npb24gaXMgZXhhY3RseSBlcXVpdmFsZW50IHRvIHogPSByKGNvc864ICsgaiBzaW7OuCk/Iiwib3B0aW9ucyI6WyJBLiB6ID0gcmVee2rOuH0iLCJCLiB6ID0gZV57cs64fSIsIkMuIHogPSByICsgZV57as64fSIsIkQuIHogPSByKGNvc864ICsgc2luzrgpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiRXVsZXIncyBmb3JtdWxhIHN0YXRlcyBlXntqzrh9ID0gY29zzrggKyBqIHNpbs64LCBzbyBtdWx0aXBseWluZyBieSByIGdpdmVzIHogPSByZV57as64fS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIGlzIG5vdCBFdWxlcidzIGZvcm11bGEgYW5kIGxvc2VzIHRoZSBjb21wbGV4LXBsYW5lIG1lYW5pbmcuIiwiQyI6IlRoZSBzdW0gciArIGVee2rOuH0gaXMgbm90IHRoZSBzYW1lIGFzIG11bHRpcGxpY2F0aW9uIGJ5IHIuIiwiRCI6IlRoZSBqIHRlcm0gaXMgbWlzc2luZywgc28gdGhpcyBpcyBub3QgYSBjb21wbGV4LW51bWJlciBpZGVudGl0eS4ifSwiaGludCI6IlN1YnN0aXR1dGUgRXVsZXIncyBmb3JtdWxhIGRpcmVjdGx5LiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6ImNvbXBsZXhfY29uanVnYXRlX2dlb21ldHJ5IiwibGFiZWwiOiJJbnRlcnByZXQgdGhlIGNvbXBsZXggY29uanVnYXRlIGdlb21ldHJpY2FsbHkiLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A0X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiB6ID0gYSArIGpiLCB3aGF0IGlzIHRoZSBnZW9tZXRyaWMgZWZmZWN0IG9mIHJlcGxhY2luZyB6IGJ5IHoqID0gYSAtIGpiPyIsIm9wdGlvbnMiOlsiQS4gUmVmbGVjdGlvbiBhY3Jvc3MgdGhlIGltYWdpbmFyeSBheGlzIiwiQi4gUmVmbGVjdGlvbiBhY3Jvc3MgdGhlIHJlYWwgYXhpcyIsIkMuIFJvdGF0aW9uIGJ5IDkwIGRlZ3JlZXMiLCJELiBDaGFuZ2Ugb2YgbWFnbml0dWRlIG9ubHkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJDaGFuZ2luZyAramIgdG8gLWpiIGZsaXBzIHRoZSB2ZXJ0aWNhbCBjb29yZGluYXRlIHdoaWxlIGtlZXBpbmcgdGhlIGhvcml6b250YWwgY29vcmRpbmF0ZSB1bmNoYW5nZWQsIHdoaWNoIHJlZmxlY3RzIHRoZSBwb2ludCBhY3Jvc3MgdGhlIHJlYWwgYXhpcy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJSZWZsZWN0aW9uIGFjcm9zcyB0aGUgaW1hZ2luYXJ5IGF4aXMgd291bGQgY2hhbmdlIGEgdG8gLWEuIiwiQyI6IkEgOTAtZGVncmVlIHJvdGF0aW9uIGNoYW5nZXMgYm90aCBjb29yZGluYXRlcyBkaWZmZXJlbnRseS4iLCJEIjoiVGhlIHNpZ24gb2YgdGhlIGltYWdpbmFyeSBjb29yZGluYXRlIGNoYW5nZXMsIHNvIHRoZSBsb2NhdGlvbiBjaGFuZ2VzIGRpcmVjdGlvbiwgbm90IGp1c3QgbWFnbml0dWRlLiJ9LCJoaW50IjoiT25seSB0aGUgc2lnbiBvZiB0aGUgdmVydGljYWwgY29vcmRpbmF0ZSBjaGFuZ2VzLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJjb25qdWdhdGVfcmVmbGVjdGlvbl9vbl9jb21wbGV4X3BsYW5lIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%

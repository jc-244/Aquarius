# B.1-2 Algebra of Complex Numbers

> **Section Objective:** Master the two main ways to write a complex number — rectangular form and polar form — and understand how they connect through Euler's formula.

---

Consider z = 3 + 4j. You already know how to plot this point on the complex plane. This section is about something deeper: that same point can be described in two completely different algebraic forms, and switching between them is a core skill.

**Rectangular form** writes the number as z = a + jb, where you read off a and b directly. **Polar form** writes the same number as z = r(cosθ + j sinθ), where r is the distance from the origin and θ is the angle.

You will learn to extract a and b from any expression, connect them to r and θ, and rewrite polar form compactly using Euler's formula. One critical exam distinction to keep in mind from the start: **a is a coordinate, r is a distance** — they are not the same thing.

This matters because nearly every later derivation in signals and systems becomes shorter and cleaner in polar or exponential form.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*The same point z is located by its Cartesian coordinates (a, b) in rectangular form and by its distance r and angle θ in polar form; z* is the mirror image of z reflected across the real axis.*

## 1. One Number, Two Coordinate Systems

Start with the concrete example: **z = 3 + 4j**.

- Re(z) = 3 — the horizontal coordinate
- Im(z) = 4 — the vertical coordinate

Now generalize. For any complex number **z = a + jb**:

| Symbol | Meaning | How to read it |
|--------|---------|----------------|
| a | Horizontal coordinate | Coefficient in front of the real part |
| b | Vertical coordinate | Coefficient of j |
| r | Distance from origin | Length of the position vector |
| θ | Angle from positive real axis | Direction of the position vector |

### COMMON MISTAKE

**r ≠ a in general.** The value a is only the *projection* of the position vector onto the real axis. The value r is the *full length* of that vector. Whenever b ≠ 0, r is strictly larger than |a|. For z = 3 + 4j, a = 3 but r = 5. They are different numbers.

Think of it this way: a tells you how far east the point is; r tells you how far the point is from where you started.

---

> **Formula Reference**
>
> Re(z) = a &nbsp;&nbsp;&nbsp; Im(z) = b
>
> a = r cosθ &nbsp;&nbsp;&nbsp; b = r sinθ

$$z = a + jb = r\cos\theta + jr\sin\theta = r(\cos\theta + j\sin\theta)$$
*This is not a new number — it is the same complex number written in two forms. In the first step, replace a with r cosθ and b with r sinθ, using the coordinate relations from the formula box above. In the second step, factor r out of both terms. This two-step substitution-and-factoring is the direct bridge from rectangular form to polar form.*

Think of a hiking map with a grid. **Rectangular form** gives you directions like "walk 3 km east and 4 km north" — you move along two separate axes. **Polar form** gives you directions like "walk 5 km in the direction 53° from east" — one distance, one angle, same destination.

Neither description is more correct than the other; they are two languages for the same location. On an exam, some problems hand you the grid coordinates (a, b) and ask for the distance-and-angle description, while others do the reverse. Recognizing which form you have been given — and knowing the conversion — is the entire skill this section builds.

## 2. Packing Polar Form into Exponential Form

We already have: z = r(cosθ + j sinθ)

Now introduce **Euler's formula**:

$$e^{j\theta} = \cos\theta + j\sin\theta$$

The bracket (cosθ + j sinθ) is exactly the right-hand side of Euler's formula. Substituting gives:

$$z = re^{j\theta}$$

This is not a new concept — it is a compact shorthand for the cosine-sine pair you already derived. Think of e^{jθ} as a single symbol that carries both the cosine and the sine together, packaged into one exponential.

### WHY THIS MATTERS FOR THE EXAM

Rectangular form (a + jb) is convenient when you need to read off coordinates or add two complex numbers. Polar and exponential form (re^{jθ}) is convenient when you need to work with magnitudes, angles, and — as you will see in later sections — multiplication and division, which reduce to simple arithmetic on r and θ.

Knowing when to switch between forms is as important as knowing the forms themselves.

---

> **Formula Reference**
>
> e^{jθ} = cosθ + j sinθ
>
> z = re^{jθ}

---
**📌 Key Takeaways**
- Rectangular form z = a + jb gives horizontal coordinate a and vertical coordinate b directly.
- Critical trap: a is the horizontal projection, r is the full distance from the origin — they are not equal.
- Euler's formula e^{jθ} = cosθ + j sinθ lets you write polar form compactly as z = re^{jθ}.

***Exam Cheat-Sheet — Likely Question Types:**

| Question type | What to do |
|---------------|------------|
| Identify Re(z) and Im(z) | Read a and b from z = a + jb; Im(z) is the coefficient of j, not the full term jb |
| Convert rectangular to polar relationships | Use a = r cosθ and b = r sinθ |
| Rewrite polar form using Euler's formula | Replace (cosθ + j sinθ) with e^{jθ} to get z = re^{jθ} |

In the next section we will build on these forms to simplify more complex operations.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJJZGVudGlmeSByZWFsIGFuZCBpbWFnaW5hcnkgcGFydHMgZnJvbSByZWN0YW5ndWxhciBmb3JtIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgeiA9IC0yICsgNWosIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gUmUoeikgPSA1IGFuZCBJbSh6KSA9IC0yIiwiQi4gUmUoeikgPSAtMiBhbmQgSW0oeikgPSA1IiwiQy4gUmUoeikgPSAtMiBhbmQgSW0oeikgPSA1aiIsIkQuIFJlKHopID0gLTJqIGFuZCBJbSh6KSA9IDUiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJJbiB6ID0gYSArIGpiLCB0aGUgcmVhbCBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudC1mcmVlIGhvcml6b250YWwgdmFsdWUgYSwgYW5kIHRoZSBpbWFnaW5hcnkgcGFydCBpcyB0aGUgY29lZmZpY2llbnQgb2YgaiwgbmFtZWx5IGIuIFNvIFJlKHopID0gLTIgYW5kIEltKHopID0gNS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIHN3YXBzIHRoZSByZWFsIGFuZCBpbWFnaW5hcnkgcGFydHMuIiwiQyI6IlRoZSBpbWFnaW5hcnkgcGFydCBpcyA1LCBub3QgdGhlIGZ1bGwgdGVybSA1ai4iLCJEIjoiVGhlIHJlYWwgcGFydCBjYW5ub3QgaW5jbHVkZSBqLiJ9LCJoaW50IjoiUmVhZCB6IGluIHRoZSBmb3JtIGEgKyBqYiBhbmQgZXh0cmFjdCBhIGFuZCBiIHNlcGFyYXRlbHkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJBIHN0dWRlbnQgc2F5czogJ0ZvciB6ID0gNyAtIDNqLCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgLTNqLicgRXhwbGFpbiBwcmVjaXNlbHkgd2hhdCBpcyB3cm9uZyB3aXRoIHRoYXQgc3RhdGVtZW50LiIsImlkZWFsX2Fuc3dlciI6IlRoZSBpbWFnaW5hcnkgcGFydCBpcyB0aGUgcmVhbCBjb2VmZmljaWVudCBvZiBqLCBzbyBJbSh6KSA9IC0zLiBUaGUgZXhwcmVzc2lvbiAtM2ogaXMgdGhlIGltYWdpbmFyeSB0ZXJtIGluIHRoZSBudW1iZXIsIG5vdCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXRzZWxmLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3RhdGUgdGhhdCBJbSh6KSA9IC0zIiwiTXVzdCBkaXN0aW5ndWlzaCBjb2VmZmljaWVudCBmcm9tIGZ1bGwgdGVybSIsIk11c3QgZXhwbGFpbiB0aGF0IGogaXMgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZSBvZiB0aGUgaW1hZ2luYXJ5IHBhcnQiXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB3aGV0aGVyIHRoZSBzdHVkZW50IGtub3dzIHRoZSBmb3JtYWwgZGVmaW5pdGlvbiByYXRoZXIgdGhhbiBqdXN0IGNvcHlpbmcgc3ltYm9scy4iLCJoaW50IjoiU2VwYXJhdGUgdGhlIGNvZWZmaWNpZW50IGZyb20gdGhlIHN5bWJvbCBqLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoicmVjdGFuZ3VsYXJfdnNfcG9sYXIiLCJsYWJlbCI6IkNvbm5lY3QgYSwgYiwgciwgYW5kIM64IiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBzdGF0ZW1lbnQgY29ycmVjdGx5IGNvbXBhcmVzIGEgYW5kIHIgZm9yIHogPSBhICsgamI/Iiwib3B0aW9ucyI6WyJBLiBhIGFuZCByIGFsd2F5cyBtZWFuIHRoZSBzYW1lIHRoaW5nIiwiQi4gYSBpcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luLCB3aGlsZSByIGlzIHRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUiLCJDLiBhIGlzIHRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUsIHdoaWxlIHIgaXMgdGhlIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiIsIkQuIHIgaXMgdGhlIGltYWdpbmFyeSBwYXJ0Il0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiVGhlIHJlY3Rhbmd1bGFyIGNvb3JkaW5hdGUgYSBnaXZlcyBob3Jpem9udGFsIHBvc2l0aW9uLCB3aGlsZSByIG1lYXN1cmVzIHRoZSBmdWxsIGxlbmd0aCBmcm9tIHRoZSBvcmlnaW4gdG8gdGhlIHBvaW50LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZXkgY29pbmNpZGUgb25seSBpbiBzcGVjaWFsIGNhc2VzLCBub3QgaW4gZ2VuZXJhbC4iLCJCIjoiVGhpcyByZXZlcnNlcyB0aGUgbWVhbmluZ3MuIiwiRCI6IlRoZSBpbWFnaW5hcnkgcGFydCBpcyBiLCBub3Qgci4ifSwiaGludCI6IlRoaW5rICdwcm9qZWN0aW9uJyB2ZXJzdXMgJ2Rpc3RhbmNlJy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgcG9pbnQgeiBpbiB0aGUgY29tcGxleCBwbGFuZSBoYXMgcG9sYXIgY29vcmRpbmF0ZXMgKHIsIM64KS4gV2hpY2ggcGFpciBtdXN0IGJlIHRydWU/Iiwib3B0aW9ucyI6WyJBLiBhID0gciBzaW7OuCBhbmQgYiA9IHIgY29zzrgiLCJCLiBhID0gciBjb3POuCBhbmQgYiA9IHIgc2luzrgiLCJDLiBhID0gY29zzrggYW5kIGIgPSBzaW7OuCIsIkQuIGEgPSByzrggYW5kIGIgPSByL864Il0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIGhvcml6b250YWwgY29tcG9uZW50IGNvbWVzIGZyb20gY29zaW5lIGFuZCB0aGUgdmVydGljYWwgY29tcG9uZW50IGNvbWVzIGZyb20gc2luZSwgZXhhY3RseSBhcyBpbiBzdGFuZGFyZCBwb2xhciBjb29yZGluYXRlcy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIHN3YXBzIGNvc2luZSBhbmQgc2luZS4iLCJDIjoiVGhpcyBmb3JnZXRzIHRoZSBzY2FsaW5nIGJ5IHIuIiwiRCI6IlRoZXNlIGFyZSBub3QgdGhlIGNvb3JkaW5hdGUgcmVsYXRpb25zIGZvciBwb2xhciBmb3JtLiJ9LCJoaW50IjoiUHJvamVjdCB0aGUgcmFkaXVzIG9udG8gdGhlIGF4ZXMuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImNvbXBsZXhfcGxhbmVfd2l0aF9yYWRpdXNfYW5kX2FuZ2xlIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoicG9sYXJfYW5kX2V1bGVyX2Zvcm1zIiwibGFiZWwiOiJSZXdyaXRlIHJlY3Rhbmd1bGFyLXBvbGFyIGV4cHJlc3Npb25zIGFuZCB1c2UgRXVsZXIncyBmb3JtdWxhIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IlN0YXJ0aW5nIGZyb20geiA9IHIoY29zzrggKyBqIHNpbs64KSwgd2hpY2ggZXhwcmVzc2lvbiBmb2xsb3dzIGRpcmVjdGx5IGZyb20gRXVsZXIncyBmb3JtdWxhPyIsIm9wdGlvbnMiOlsiQS4geiA9IHIgZV7OuCIsIkIuIHogPSBlXntqcn0iLCJDLiB6ID0gciBlXntqzrh9IiwiRC4geiA9IHIoY29zzrggLSBqIHNpbs64KSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IkV1bGVyJ3MgZm9ybXVsYSBzYXlzIGVee2rOuH0gPSBjb3POuCArIGogc2luzrguIFJlcGxhY2luZyB0aGUgYnJhY2tldCB3aXRoIGVee2rOuH0gZ2l2ZXMgeiA9IHIgZV57as64fS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgZXhwb25lbnQgbXVzdCBiZSBqzrgsIG5vdCDOuCBhbG9uZS4iLCJCIjoiVGhpcyBpbmNvcnJlY3RseSBwdXRzIHIgaW50byB0aGUgZXhwb25lbnQuIiwiRCI6IlRoZSBtaW51cyBzaWduIHdvdWxkIGNvcnJlc3BvbmQgdG8gdGhlIGNvbmp1Z2F0ZSBkaXJlY3Rpb24uIn0sImhpbnQiOiJTdWJzdGl0dXRlIGVee2rOuH0gZXhhY3RseSBmb3IgY29zzrggKyBqIHNpbs64LiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9LHsiaWQiOiJrcDNfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIGxpbmUgaXMgdGhlIGNvcnJlY3QgaW50ZXJtZWRpYXRlIHN0ZXAgd2hlbiBjb252ZXJ0aW5nIHogPSBhICsgamIgaW50byBwb2xhciBmb3JtIHVzaW5nIGEgPSByIGNvc864IGFuZCBiID0gciBzaW7OuD8iLCJvcHRpb25zIjpbIkEuIHogPSByICsgas64IiwiQi4geiA9IHIgY29zzrggKyBqciBzaW7OuCIsIkMuIHogPSByKGNvc864ICsgc2luzrgpIiwiRC4geiA9IGEgY29zzrggKyBqYiBzaW7OuCJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlN1YnN0aXR1dGUgYSA9IHIgY29zzrggYW5kIGIgPSByIHNpbs64IGludG8geiA9IGEgKyBqYi4gVGhhdCBnaXZlcyB6ID0gciBjb3POuCArIGogciBzaW7OuCBiZWZvcmUgZmFjdG9yaW5nIG91dCByLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgaXMgbm90IGhvdyByZWN0YW5ndWxhciBjb21wb25lbnRzIGNvbnZlcnQgdG8gcG9sYXIgZm9ybS4iLCJDIjoiSXQgb21pdHMgdGhlIGZhY3RvciBqIG9uIHRoZSBpbWFnaW5hcnkgY29tcG9uZW50LiIsIkQiOiJJdCBpbmNvcnJlY3RseSBtdWx0aXBsaWVzIGEgYW5kIGIgYnkgdHJpZyBmdW5jdGlvbnMgaW5zdGVhZCBvZiByZXBsYWNpbmcgdGhlbS4ifSwiaGludCI6IlJlcGxhY2UgYSBhbmQgYiBmaXJzdDsgZmFjdG9yIGFmdGVyd2FyZC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19XX0=" style="display:none;"></div>%%KC_END%%

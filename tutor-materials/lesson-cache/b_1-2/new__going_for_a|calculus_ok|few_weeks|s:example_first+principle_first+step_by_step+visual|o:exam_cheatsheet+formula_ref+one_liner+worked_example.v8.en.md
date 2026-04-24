# B.1-2 Algebra of Complex Numbers

> **Section Objective:** Move fluently between rectangular form a + jb and polar form r(cosθ + j sinθ), and correctly identify every part of a complex number without confusing magnitude with components.

---

Start with a concrete example. Take z = 3 + 4j. Its real part is Re(z) = 3, its imaginary part is Im(z) = 4, and it sits at the point (3, 4) on the complex plane. Simple enough — but two traps hide here that cost students exam points every semester.

**Trap 1:** The magnitude of z = 3 + 4j is **not** 3. It is 5. The real part and the distance from the origin are different things.

**Trap 2:** The imaginary part is **not** 4j. It is 4. The imaginary part is a real number — the coefficient of j, not the full term.

This section builds the vocabulary and geometry to avoid both traps. Complex numbers often simplify derivations even when the final answer is real, so fluency here pays dividends throughout the course.

**Three main ideas ahead:** identifying the parts, reading the geometry, and rewriting in polar form.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*The complex plane showing z = a + jb as the point (a, b), with magnitude r as the straight-line distance from the origin to that point, angle θ measured from the positive real axis, and the conjugate z* = a − jb as the mirror image of z reflected across the real axis.*

## 1. Rectangular Form and What the Parts Mean

**Core principle:** In z = a + jb, the quantity a is the real part and the quantity b is the imaginary part. Both a and b are ordinary real numbers.

### WORKED EXAMPLE

Let z = 5 − 2j. Match it to the template z = a + jb:

- **Real part:** Re(z) = a = **5**
- **Imaginary part:** Im(z) = b = **−2**
- **Imaginary term:** −2j (the full term, including j)
- **Point on the complex plane:** (5, −2)

### COMMON MISTAKE

A very common exam error is writing Im(5 − 2j) = −2j. This is **wrong**. The imaginary part is the *coefficient* of j, which is the real number −2. The expression −2j is the imaginary *term* — the whole piece of the expression — not the imaginary *part*. The imaginary part is always a real number.

> **Core takeaway:** Re(z) = a and Im(z) = b are both real numbers; neither one carries the symbol j.

| Notation | Meaning | Value for z = 5 − 2j |
|----------|---------|----------------------|
| z = a + jb | Rectangular form | 5 + j(−2) |
| Re(z) = a | Real part | 5 |
| Im(z) = b | Imaginary part | −2 |

## 2. From Rectangular Coordinates to Magnitude and Angle

**Example first.** Take z = 3 + 4j, which sits at the point (3, 4) on the complex plane.

Look at the figure. Draw a right triangle from the origin to the point (3, 4):

- **Horizontal leg** = a = 3 (the real part, measured along the real axis)
- **Vertical leg** = b = 4 (the imaginary part, measured along the imaginary axis)
- **Hypotenuse** = r = the distance from the origin to the point

### STEP-BY-STEP DERIVATION

By the Pythagorean theorem:

r = √(a² + b²) = √(3² + 4²) = √(9 + 16) = √25 = **5**

The angle θ satisfies:

tan θ = b/a = 4/3, so θ = arctan(4/3) ≈ 53.1°

### KEY INSIGHT

**The real part is 3. The magnitude is 5. These are not the same thing.** The magnitude r is the straight-line distance from the origin to the point — it is always at least as large as either component, and it equals a component only in degenerate cases.

> **Core takeaway:** Magnitude r = √(a² + b²) is the distance from the origin, not the real part.

| Formula | Meaning |
|---------|--------|
| r = √(a² + b²) | Magnitude (distance from origin) |
| a = r cosθ | Real part from polar quantities |
| b = r sinθ | Imaginary part from polar quantities |

$$z = a + jb = r\cos\theta + jr\sin\theta = r(\cos\theta + j\sin\theta)$$
*This single line shows the same complex number written in two equivalent forms. On the left, a + jb is rectangular form — a is the horizontal coordinate and b is the vertical coordinate. On the right, r(cosθ + j sinθ) is polar form — the connections are a = r cosθ and b = r sinθ, so the horizontal and vertical components are recovered by projecting the magnitude r onto each axis using the angle θ. Memorize this identity: it is the bridge between the two representations you will use throughout the course.*

## 3. Polar Form, Euler's Formula, and Conjugate Geometry

**General rule:** If a complex number z has magnitude r and angle θ, then:

z = r(cosθ + j sinθ)

This is polar form. It packages the same information as a + jb, just organized around distance and direction rather than horizontal and vertical coordinates.

### THE CONJUGATE IN THE FIGURE

Look at the textbook figure again. The conjugate z* = a − jb is the **mirror image** of z reflected across the real axis. Geometrically:

- The real part a stays the same (same horizontal position)
- The imaginary part flips from b to −b (reflected vertically)
- The magnitude r stays the same (same distance from origin)
- The angle flips from θ to −θ

### EULER'S FORMULA

Euler's formula states e^(jθ) = cosθ + j sinθ. This means polar form can be written even more compactly as z = re^(jθ). For now, treat it as a shorthand for the same polar expression.

### WORKED MINI-EXAMPLE

Convert z = 2 + 2j to polar form:

1. a = 2, b = 2
2. r = √(2² + 2²) = √8 = 2√2
3. tan θ = 2/2 = 1, and the point is in the first quadrant, so θ = π/4
4. **z = 2√2 (cos π/4 + j sin π/4)**

> **Core takeaway:** Polar form and rectangular form describe the same point; Euler's formula is a compact alias for the polar expression.

### EXAM CHEAT-SHEET

Likely question types on this material:

- Given z = a + jb, find r and θ
- Given r and θ, write z in rectangular form using a = r cosθ and b = r sinθ
- Identify z* from z and describe the geometric transformation
- Recognize which form is polar and which is rectangular

| Formula | Meaning |
|---------|--------|
| z = r(cosθ + j sinθ) | Polar form |
| e^(jθ) = cosθ + j sinθ | Euler's formula |
| z* = a − jb | Complex conjugate |

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula packages the cosine and sine functions into a single exponential expression, which means polar form can be written compactly as z = re^(jθ) instead of the longer z = r(cosθ + j sinθ) — both expressions mean exactly the same thing.*

---
**📌 Key Takeaways**
- Im(z) = b is the real-number coefficient of j, never the term bj itself.
- Magnitude r = √(a² + b²) is the distance from the origin, not the real part a.
- Polar form z = r(cosθ + j sinθ) and rectangular form a + jb describe the same point.

*In the next section we will use these forms to perform more efficient complex-number calculations.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJJZGVudGlmeSByZWFsIHBhcnQsIGltYWdpbmFyeSBwYXJ0LCBhbmQgcG9pbnQgY29vcmRpbmF0ZXMgZnJvbSByZWN0YW5ndWxhciBmb3JtIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgeiA9IDUgLSAyaiwgd2hpY2ggc3RhdGVtZW50IGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBSZSh6KSA9IC0yIGFuZCBJbSh6KSA9IDUiLCJCLiBSZSh6KSA9IDUgYW5kIEltKHopID0gLTIiLCJDLiBSZSh6KSA9IDUgYW5kIEltKHopID0gLTJqIiwiRC4gVGhlIHBvaW50IHJlcHJlc2VudGluZyB6IGlzICgtMiwgNSkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJJbiB6ID0gYSArIGpiLCB0aGUgcmVhbCBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudCB3aXRob3V0IGogYW5kIHRoZSBpbWFnaW5hcnkgcGFydCBpcyB0aGUgY29lZmZpY2llbnQgb2Ygai4gSGVyZSBhID0gNSBhbmQgYiA9IC0yLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgc3dhcHMgdGhlIHJlYWwgYW5kIGltYWdpbmFyeSBwYXJ0cy4iLCJDIjoiSW0oeikgaXMgdGhlIGNvZWZmaWNpZW50IC0yLCBub3QgdGhlIHRlcm0gLTJqLiIsIkQiOiJUaGUgcG9pbnQgaXMgKDUsIC0yKSwgbm90ICgtMiwgNSkuIn0sImhpbnQiOiJSZWFkIHogPSBhICsgamIgYnkgbWF0Y2hpbmcgY29lZmZpY2llbnRzLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQSBzdHVkZW50IHdyaXRlcyBJbSg1IC0gMmopID0gLTJqLiBFeHBsYWluIHByZWNpc2VseSB3aHkgdGhpcyBpcyB3cm9uZy4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIHJlYWwtbnVtYmVyIGNvZWZmaWNpZW50IG9mIGosIHNvIEltKDUgLSAyaikgPSAtMi4gVGhlIGV4cHJlc3Npb24gLTJqIGlzIHRoZSBpbWFnaW5hcnkgdGVybSwgbm90IHRoZSBpbWFnaW5hcnkgcGFydCBpdHNlbGYuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBzdGF0ZSB0aGF0IHRoZSBpbWFnaW5hcnkgcGFydCBpcyB0aGUgY29lZmZpY2llbnQgb2YgaiIsIk11c3QgZ2l2ZSB0aGUgY29ycmVjdCB2YWx1ZSBJbSh6KSA9IC0yIiwiTXVzdCBkaXN0aW5ndWlzaCBpbWFnaW5hcnkgcGFydCBmcm9tIGltYWdpbmFyeSB0ZXJtIl0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3Mgd2hldGhlciB0aGUgc3R1ZGVudCBrbm93cyB0aGUgZm9ybWFsIGRlZmluaXRpb24gcmF0aGVyIHRoYW4ganVzdCBjb3B5aW5nIHN5bWJvbHMuIiwiaGludCI6IlNlcGFyYXRlIHRoZSBudW1iZXIgbXVsdGlwbHlpbmcgaiBmcm9tIHRoZSBzeW1ib2wgaiBpdHNlbGYuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJtYWduaXR1ZGVfdnNfY29tcG9uZW50IiwibGFiZWwiOiJEaXN0aW5ndWlzaCBtYWduaXR1ZGUgZnJvbSByZWFsIGFuZCBpbWFnaW5hcnkgY29tcG9uZW50cyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSAzICsgNGosIHdoYXQgaXMgdGhlIG1hZ25pdHVkZSB8enw/Iiwib3B0aW9ucyI6WyJBLiAzIiwiQi4gNCIsIkMuIDUiLCJELiA3Il0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiVGhlIG1hZ25pdHVkZSBpcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luOiB8enwgPSBzcXJ0KDNeMiArIDReMikgPSBzcXJ0KDkgKyAxNikgPSBzcXJ0KDI1KSA9IDUuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiMyBpcyB0aGUgcmVhbCBwYXJ0LCBub3QgdGhlIG1hZ25pdHVkZS4iLCJCIjoiNCBpcyB0aGUgaW1hZ2luYXJ5IHBhcnQsIG5vdCB0aGUgbWFnbml0dWRlLiIsIkQiOiI3IGlzIHRoZSBzdW0gb2YgY29tcG9uZW50cywgbm90IHRoZSBkaXN0YW5jZS4ifSwiaGludCI6IlVzZSB0aGUgUHl0aGFnb3JlYW4gdGhlb3JlbS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgcG9pbnQgb24gdGhlIGNvbXBsZXggcGxhbmUgaXMgYXQgKDYsIDgpLiBXaGljaCBzdGF0ZW1lbnQgaXMgdHJ1ZT8iLCJvcHRpb25zIjpbIkEuIFRoZSBtYWduaXR1ZGUgaXMgNiBiZWNhdXNlIHRoZSB4LWNvb3JkaW5hdGUgaXMgNiIsIkIuIFRoZSBtYWduaXR1ZGUgaXMgOCBiZWNhdXNlIHRoZSB5LWNvb3JkaW5hdGUgaXMgOCIsIkMuIFRoZSBtYWduaXR1ZGUgaXMgMTAgYmVjYXVzZSBpdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIiwiRC4gVGhlIG1hZ25pdHVkZSBpcyAxNCBiZWNhdXNlIDYgKyA4ID0gMTQiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJGb3IgcG9pbnQgKGEsIGIpLCB0aGUgbWFnbml0dWRlIGlzIHIgPSBzcXJ0KGFeMiArIGJeMikgPSBzcXJ0KDM2ICsgNjQpID0gc3FydCgxMDApID0gMTAuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBjb25mdXNlcyBtYWduaXR1ZGUgd2l0aCB0aGUgcmVhbCBwYXJ0LiIsIkIiOiJUaGlzIGNvbmZ1c2VzIG1hZ25pdHVkZSB3aXRoIHRoZSBpbWFnaW5hcnkgcGFydC4iLCJEIjoiQWRkaW5nIGNvb3JkaW5hdGVzIGRvZXMgbm90IGdpdmUgZGlzdGFuY2UuIn0sImhpbnQiOiJNYWduaXR1ZGUgbWVhbnMgcmFkaWFsIGRpc3RhbmNlLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoicG9sYXJfcmV3cml0ZSIsImxhYmVsIjoiUmV3cml0ZSByZWN0YW5ndWxhciBmb3JtIGluIHBvbGFyIGZvcm0gdXNpbmcgciwgY29zzrgsIGFuZCBzaW7OuCIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgeiA9IGEgKyBqYiBoYXMgcG9sYXIgY29vcmRpbmF0ZXMgKHIsIM64KSwgd2hpY2ggZXhwcmVzc2lvbiBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4geiA9IHIgKyBqzrgiLCJCLiB6ID0gcihjb3POuCArIGogc2luzrgpIiwiQy4geiA9IGEoY29zzrggKyBqIHNpbs64KSIsIkQuIHogPSByKHNpbs64ICsgaiBjb3POuCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJQb2xhciBmb3JtIHVzZXMgbWFnbml0dWRlIHIgYW5kIGFuZ2xlIM64IHRvIHJlYnVpbGQgdGhlIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIGNvbXBvbmVudHMgYXMgciBjb3POuCBhbmQgciBzaW7OuC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJNYWduaXR1ZGUgYW5kIGFuZ2xlIGRvIG5vdCBjb21iaW5lIGJ5IHNpbXBsZSBhZGRpdGlvbi4iLCJDIjoiVGhlIHNjYWxpbmcgZmFjdG9yIGlzIHIsIG5vdCB0aGUgcmVhbCBwYXJ0IGEuIiwiRCI6IlRoaXMgc3dhcHMgY29zaW5lIGFuZCBzaW5lLCByZXZlcnNpbmcgdGhlIGNvb3JkaW5hdGUgcm9sZXMuIn0sImhpbnQiOiJNYXRjaCBhID0gciBjb3POuCBhbmQgYiA9IHIgc2luzrggZmlyc3QuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQ29udmVydCB6ID0gMiArIDJqIGludG8gcG9sYXIgZm9ybSwgc2hvd2luZyByIGFuZCDOuC4iLCJpZGVhbF9hbnN3ZXIiOiJyID0gc3FydCgyXjIgKyAyXjIpID0gc3FydCg4KSA9IDJzcXJ0KDIpLiBTaW5jZSB0YW4gzrggPSAyLzIgPSAxIGFuZCB0aGUgcG9pbnQgaXMgaW4gdGhlIGZpcnN0IHF1YWRyYW50LCDOuCA9IM+ALzQuIFRoZXJlZm9yZSB6ID0gMnNxcnQoMikoY29zIM+ALzQgKyBqIHNpbiDPgC80KS4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IGNvbXB1dGUgciA9IDJzcXJ0KDIpIiwiTXVzdCBpZGVudGlmeSDOuCA9IM+ALzQgb3IgNDUgZGVncmVlcyIsIk11c3Qgd3JpdGUgdGhlIGZpbmFsIHBvbGFyIGZvcm0gY29ycmVjdGx5Il0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3MgdGhlIGZ1bGwgcmVjdGFuZ3VsYXItdG8tcG9sYXIgY29udmVyc2lvbiBwcm9jZXNzLiIsImhpbnQiOiJGaW5kIHRoZSBkaXN0YW5jZSBmaXJzdCwgdGhlbiB0aGUgYW5nbGUgZnJvbSBiL2EuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoiZmlndXJlX2FuZF9jb25qdWdhdGUiLCJsYWJlbCI6IkludGVycHJldCB0aGUgdGV4dGJvb2sgZmlndXJlOiBhbmdsZSwgbWFnbml0dWRlLCBhbmQgY29uanVnYXRlIHJlZmxlY3Rpb24iLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A0X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJbiB0aGUgY29tcGxleC1wbGFuZSBmaWd1cmUsIHdoYXQgY2hhbmdlcyB3aGVuIHogPSBhICsgamIgaXMgcmVwbGFjZWQgYnkgaXRzIGNvbmp1Z2F0ZSB6KiA9IGEgLSBqYj8iLCJvcHRpb25zIjpbIkEuIFRoZSByZWFsIHBhcnQgY2hhbmdlcyBzaWduIGJ1dCB0aGUgaW1hZ2luYXJ5IHBhcnQgc3RheXMgdGhlIHNhbWUiLCJCLiBUaGUgaW1hZ2luYXJ5IHBhcnQgY2hhbmdlcyBzaWduIHdoaWxlIHRoZSByZWFsIHBhcnQgc3RheXMgdGhlIHNhbWUiLCJDLiBCb3RoIHJlYWwgYW5kIGltYWdpbmFyeSBwYXJ0cyBjaGFuZ2Ugc2lnbiIsIkQuIFRoZSBtYWduaXR1ZGUgYmVjb21lcyB6ZXJvIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiQ29tcGxleCBjb25qdWdhdGlvbiByZWZsZWN0cyB0aGUgcG9pbnQgYWNyb3NzIHRoZSByZWFsIGF4aXMsIHNvIHRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgYSBzdGF5cyB0aGUgc2FtZSB3aGlsZSB0aGUgdmVydGljYWwgY29vcmRpbmF0ZSBiIGNoYW5nZXMgdG8gLWIuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhhdCB3b3VsZCByZWZsZWN0IGFjcm9zcyB0aGUgaW1hZ2luYXJ5IGF4aXMsIG5vdCB0aGUgcmVhbCBheGlzLiIsIkMiOiJDaGFuZ2luZyBib3RoIHNpZ25zIHdvdWxkIHJvdGF0ZSB0aGUgcG9pbnQgMTgwIGRlZ3JlZXMsIG5vdCByZWZsZWN0IGl0IGFjcm9zcyB0aGUgcmVhbCBheGlzLiIsIkQiOiJDb25qdWdhdGlvbiBkb2VzIG5vdCBjb2xsYXBzZSB0aGUgcG9pbnQgdG8gdGhlIG9yaWdpbi4ifSwiaGludCI6IlRoaW5rIG1pcnJvciBpbWFnZSBhY3Jvc3MgdGhlIGhvcml6b250YWwgYXhpcy4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiY29tcGxleF9wbGFuZV9jb25qdWdhdGVfcmVmbGVjdGlvbiIsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%

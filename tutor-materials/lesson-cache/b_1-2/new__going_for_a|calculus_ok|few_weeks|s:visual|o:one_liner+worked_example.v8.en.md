# B.1-2 Algebra of Complex Numbers

> **Objective:** Move fluently between rectangular and polar representations of a complex number, and recognize the geometric meaning of the conjugate.

Take z = 3 + 4j as a starting point. The pair (3, 4) gives you the rectangular coordinates — horizontal and vertical — while r and θ give you the polar description of the same point. The symbol j marks the vertical axis. This section builds the bridge between those two descriptions.

Why does it matter? Later derivations — especially in circuit analysis and signal processing — become dramatically shorter in polar or exponential form, even when the original problem and its final answer are purely real.

Four ideas to master here: **rectangular form**, **real and imaginary parts**, **polar conversion** via a = r cos θ and b = r sin θ, and **conjugate symmetry**.

> **Exam warning:** Do not confuse the real part a with the magnitude r — they are different quantities.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*This single diagram connects all three representations: z = a + jb is plotted at coordinates (a, b), its distance from the origin is the magnitude r, the angle from the positive real axis is θ, and the conjugate z* = a − jb appears as the mirror image reflected across the real axis.*

## 1. Rectangular Form Means Coordinates

Consider z = −2 + 5j. Reading directly from the form z = a + jb:

- **Re(z) = −2** (the horizontal coordinate)
- **Im(z) = 5** (the vertical coordinate — the coefficient of j, not the term 5j)

### COMMON EXAM TRAP

Students frequently write Im(z) = 5j. That is wrong. The imaginary part is the **real number** b, not the full term jb. The symbol j is the axis marker, not part of the value.

---

**Worked example — every line shown:**

Given z = 7 − 3j:

| Quantity | Value |
|---|---|
| Real part Re(z) | 7 |
| Imaginary part Im(z) | −3 |
| Coordinate pair | (7, −3) |
| Location | Right of origin, below the real axis |

#### Note
The coordinate pair is always (a, b) = (Re(z), Im(z)), with the imaginary part as the vertical component.

> **Core takeaway:** In z = a + jb, the imaginary part is the number b — never the expression jb.

$$z = a + jb, \qquad \operatorname{Re}(z)=a, \qquad \operatorname{Im}(z)=b$$
*Rectangular form stores a complex number as horizontal coordinate a and vertical coordinate b, so the imaginary part is the coefficient b — not the full term jb.*

## 2. From Rectangular Data to Polar Data

If z = a + jb is a point on the complex plane, then:

- **r** is the straight-line distance from the origin to that point (the magnitude)
- **θ** is the angle measured counterclockwise from the positive real axis

These two quantities are not the same as a and b. The conversion follows directly from right-triangle geometry:

$$a = r\cos\theta \qquad b = r\sin\theta$$

Substituting back into z = a + jb:

$$z = r\cos\theta + j\,r\sin\theta = r(\cos\theta + j\sin\theta)$$

This is the **trigonometric (polar) form** of z.

### COMMON MISTAKE

Do not set r = a. The magnitude r is the hypotenuse of the right triangle formed by a and b. The real part a is only one leg.

---

**Fully worked example — z = 3 + 4j:**

**Step 1 — Find r:**
$$r = \sqrt{a^2 + b^2} = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

**Step 2 — Find θ:**
$$\tan\theta = \frac{b}{a} = \frac{4}{3} \implies \theta = \arctan\!\left(\tfrac{4}{3}\right) \approx 53.1°$$

**Step 3 — Write trigonometric form:**
$$z = 5(\cos\theta + j\sin\theta), \quad \tan\theta = \tfrac{4}{3}$$

> **Core takeaway:** r is the Pythagorean distance from the origin; a and b are just the legs of the triangle, not the hypotenuse.

$$a = r\cos\theta, \qquad b = r\sin\theta, \qquad z = r(\cos\theta + j\sin\theta)$$
*Polar form rewrites the same complex number using its length r and direction θ instead of its rectangular coordinates a and b — same point, different description.*

## 3. Two Powerful Shortcuts: Euler Form and Conjugates

### EULER'S FORMULA

Euler's formula states exactly:
$$e^{j\theta} = \cos\theta + j\sin\theta$$

This compresses the cosine-sine pair into a single compact exponential factor. As a result, the polar form z = r(cos θ + j sin θ) can be written even more concisely as:
$$z = re^{j\theta}$$

This exponential form is especially powerful for multiplication and division, which reduce to multiplying magnitudes and adding angles.

---

### THE COMPLEX CONJUGATE

The conjugate of z = a + jb is defined as:
$$z^* = a - jb$$

Geometrically, conjugation is a **reflection across the real axis**: the real part stays fixed, the imaginary part flips sign, and the magnitude r is unchanged.

**Quick example:** If z = 2 + 6j, then z* = 2 − 6j. The point moves from above the real axis to the mirror position below it.

> **Core takeaway:** Euler form compacts polar representation into re^{jθ}; conjugation flips only the imaginary part and mirrors the point vertically.

$$e^{j\theta}=\cos\theta + j\sin\theta, \qquad z^* = a - jb$$
*Euler's formula gives a compact polar representation by collapsing the cosine-sine pair into a single exponential, while conjugation flips only the sign of the imaginary part and mirrors the point across the real axis.*

---
**📌 Key Takeaways**
- In z = a + jb, the real part is a and the imaginary part is b — never jb.
- Polar conversion: r = sqrt(a² + b²) is the magnitude; a = r cos θ and b = r sin θ.
- The conjugate z* = a − jb reflects the point across the real axis, preserving magnitude.

*With these representations firmly in place, the next section applies them directly to arithmetic operations — addition, multiplication, and division — where the choice of form makes the algebra dramatically simpler.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJJZGVudGlmeSByZWFsIHBhcnQsIGltYWdpbmFyeSBwYXJ0LCBhbmQgY29vcmRpbmF0ZSBwYWlyIGZyb20gcmVjdGFuZ3VsYXIgZm9ybSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSA3IC0gM2osIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gUmUoeikgPSA3IGFuZCBJbSh6KSA9IC0zIiwiQi4gUmUoeikgPSA3IGFuZCBJbSh6KSA9IC0zaiIsIkMuIFJlKHopID0gLTMgYW5kIEltKHopID0gNyIsIkQuIFRoZSBjb29yZGluYXRlIHBhaXIgaXMgKC0zLCA3KSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkluIHogPSBhICsgamIsIHRoZSByZWFsIHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50IG9uIHRoZSBob3Jpem9udGFsIGF4aXMsIGFuZCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIHJlYWwtbnVtYmVyIGNvZWZmaWNpZW50IG9mIGouIFNvIFJlKHopID0gNyBhbmQgSW0oeikgPSAtMy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50IC0zLCBub3QgdGhlIHRlcm0gLTNqLiIsIkMiOiJUaGlzIHN3YXBzIHRoZSByZWFsIGFuZCBpbWFnaW5hcnkgY29tcG9uZW50cy4iLCJEIjoiVGhlIGNvcnJlY3QgY29vcmRpbmF0ZSBwYWlyIGlzICg3LCAtMyksIG5vdCAoLTMsIDcpLiJ9LCJoaW50IjoiUmVhZCB6ID0gYSArIGpiIGFuZCBtYXRjaCBhIGFuZCBiIGRpcmVjdGx5LiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQSBzdHVkZW50IHNheXM6ICdGb3IgeiA9IC0yICsgNWosIHRoZSBpbWFnaW5hcnkgcGFydCBpcyA1ai4nIEV4cGxhaW4gcHJlY2lzZWx5IHdoYXQgaXMgd3Jvbmcgd2l0aCB0aGF0IHN0YXRlbWVudC4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIHJlYWwtbnVtYmVyIGNvZWZmaWNpZW50IG9mIGosIHNvIEltKHopID0gNS4gVGhlIGV4cHJlc3Npb24gNWogaXMgdGhlIGltYWdpbmFyeSB0ZXJtLCBub3QgdGhlIGltYWdpbmFyeSBwYXJ0IGl0c2VsZi4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IHN0YXRlIHRoYXQgSW0oeikgPSA1IiwiTXVzdCBkaXN0aW5ndWlzaCBjb2VmZmljaWVudCBmcm9tIGZ1bGwgdGVybSIsIk11c3QgZXhwbGljaXRseSBtZW50aW9uIHRoYXQgNWogaXMgbm90IHRoZSBpbWFnaW5hcnkgcGFydCJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQgdHJ1bHkga25vd3MgdGhlIGZvcm1hbCBkZWZpbml0aW9uIGluc3RlYWQgb2YganVzdCBjb3B5aW5nIHN5bWJvbHMuIiwiaGludCI6IkFzayB3aGF0IGIgaXMgaW4geiA9IGEgKyBqYi4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6InBvbGFyX3JlbGF0aW9ucyIsImxhYmVsIjoiUmVsYXRlIHJlY3Rhbmd1bGFyIGNvb3JkaW5hdGVzIHRvIG1hZ25pdHVkZSBhbmQgYW5nbGUiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIHogPSBhICsgamIgaGFzIHBvbGFyIGRhdGEgKHIsIM64KSwgd2hpY2ggcGFpciBvZiBlcXVhdGlvbnMgaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIGEgPSByIHNpbiDOuCwgYiA9IHIgY29zIM64IiwiQi4gYSA9IHIgY29zIM64LCBiID0gciBzaW4gzrgiLCJDLiBhID0gY29zIM64LCBiID0gc2luIM64IiwiRC4gciA9IGEgKyBiLCDOuCA9IGFiIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIGhvcml6b250YWwgY29vcmRpbmF0ZSBjb21lcyBmcm9tIGFkamFjZW50IHNpZGUgb3ZlciBoeXBvdGVudXNlLCBzbyBhID0gciBjb3MgzrgsIGFuZCB0aGUgdmVydGljYWwgY29vcmRpbmF0ZSBpcyBiID0gciBzaW4gzrguIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyByZXZlcnNlcyBjb3NpbmUgYW5kIHNpbmUuIiwiQyI6Ikl0IGlnbm9yZXMgdGhlIG1hZ25pdHVkZSByLiIsIkQiOiJUaGVzZSBhcmUgbm90IHRoZSBnZW9tZXRyaWMgZGVmaW5pdGlvbnMgb2YgbWFnbml0dWRlIGFuZCBhbmdsZS4ifSwiaGludCI6IlRoaW5rIHggPSByIGNvcyDOuCBhbmQgeSA9IHIgc2luIM64IGZyb20gc3RhbmRhcmQgcG9sYXIgY29vcmRpbmF0ZXMuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InB5dGhvbl9tYXRwbG90bGliIGNvbXBsZXgtcGxhbmUgdHJpYW5nbGUgd2l0aCBsZWdzIGEgYW5kIGIsIGh5cG90ZW51c2UgciwgYW5nbGUgzrgiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgeiA9IDMgKyA0aiwgd2hhdCBpcyB0aGUgbWFnbml0dWRlIHI/Iiwib3B0aW9ucyI6WyJBLiAzIiwiQi4gNCIsIkMuIDUiLCJELiA3Il0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiTWFnbml0dWRlIGlzIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbjogciA9IHNxcnQoM14yICsgNF4yKSA9IHNxcnQoMjUpID0gNS4gSXQgaXMgbm90IGp1c3QgdGhlIHJlYWwgcGFydCBvciB0aGUgc3VtIG9mIGNvbXBvbmVudHMuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiMyBpcyB0aGUgcmVhbCBwYXJ0IGEsIG5vdCB0aGUgbWFnbml0dWRlLiIsIkIiOiI0IGlzIHRoZSBpbWFnaW5hcnkgcGFydCBiLCBub3QgdGhlIG1hZ25pdHVkZS4iLCJEIjoiTWFnbml0dWRlIGlzIG5vdCBmb3VuZCBieSBhZGRpbmcgMyBhbmQgNC4ifSwiaGludCI6IlVzZSB0aGUgUHl0aGFnb3JlYW4gdGhlb3JlbS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTMiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIGlzIHRoZSBjb3JyZWN0IHRyaWdvbm9tZXRyaWMgZm9ybSBvZiB6ID0gMyArIDRqPyIsIm9wdGlvbnMiOlsiQS4gNShjb3MgzrggKyBqIHNpbiDOuCkgd2l0aCB0YW4gzrggPSA0LzMiLCJCLiAzKGNvcyDOuCArIGogc2luIM64KSB3aXRoIHRhbiDOuCA9IDQvMyIsIkMuIDQoY29zIM64ICsgaiBzaW4gzrgpIHdpdGggdGFuIM64ID0gMy80IiwiRC4gNyhjb3MgzrggKyBqIHNpbiDOuCkgd2l0aCB0YW4gzrggPSA0LzMiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJGb3IgeiA9IDMgKyA0aiwgdGhlIG1hZ25pdHVkZSBpcyA1IGFuZCB0aGUgYW5nbGUgc2F0aXNmaWVzIHRhbiDOuCA9IDQvMywgc28geiA9IDUoY29zIM64ICsgaiBzaW4gzrgpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IjMgaXMgdGhlIHJlYWwgcGFydCwgbm90IHRoZSBtYWduaXR1ZGUuIiwiQyI6IjQgaXMgdGhlIGltYWdpbmFyeSBwYXJ0IGFuZCB0aGUgdGFuZ2VudCByYXRpbyBpcyByZXZlcnNlZC4iLCJEIjoiNyBpcyB0aGUgc3VtIG9mIGNvb3JkaW5hdGVzLCBub3QgdGhlIG1hZ25pdHVkZS4ifSwiaGludCI6IkZpbmQgciBmaXJzdCwgdGhlbiB1c2UgYi9hIGZvciB0YW4gzrguIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJldWxlcl9hbmRfY29uanVnYXRlIiwibGFiZWwiOiJVc2UgRXVsZXIgZm9ybSBhbmQgaWRlbnRpZnkgdGhlIGdlb21ldHJpYyBlZmZlY3Qgb2YgY29uanVnYXRpb24iLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiB6ID0gMiArIDZqLCB3aGljaCBjaG9pY2UgZ2l2ZXMgaXRzIGNvbXBsZXggY29uanVnYXRlIGFuZCBnZW9tZXRyaWMgbWVhbmluZz8iLCJvcHRpb25zIjpbIkEuIHoqID0gLTIgKyA2ajsgcmVmbGVjdGlvbiBhY3Jvc3MgdGhlIGltYWdpbmFyeSBheGlzIiwiQi4geiogPSAyIC0gNmo7IHJlZmxlY3Rpb24gYWNyb3NzIHRoZSByZWFsIGF4aXMiLCJDLiB6KiA9IC0yIC0gNmo7IHJvdGF0aW9uIGJ5IDE4MMKwIiwiRC4geiogPSAyICsgNmo7IG5vIGNoYW5nZSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkNvbmp1Z2F0aW9uIGtlZXBzIHRoZSByZWFsIHBhcnQgYW5kIGNoYW5nZXMgdGhlIHNpZ24gb2YgdGhlIGltYWdpbmFyeSBwYXJ0LCB3aGljaCByZWZsZWN0cyB0aGUgcG9pbnQgYWNyb3NzIHRoZSByZWFsIGF4aXMuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhhdCBjaGFuZ2VzIHRoZSByZWFsIHBhcnQgaW5zdGVhZCBvZiB0aGUgaW1hZ2luYXJ5IHBhcnQuIiwiQyI6IkJvdGggc2lnbnMgY2hhbmdlZCwgd2hpY2ggaXMgbm90IGNvbmp1Z2F0aW9uLiIsIkQiOiJBIG5vbnplcm8gaW1hZ2luYXJ5IHBhcnQgbXVzdCBjaGFuZ2Ugc2lnbiB1bmRlciBjb25qdWdhdGlvbi4ifSwiaGludCI6IkNvbmp1Z2F0aW9uIGZsaXBzIHZlcnRpY2FsIHBvc2l0aW9uIG9ubHkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InB5dGhvbl9tYXRwbG90bGliIGNvbXBsZXggcGxhbmUgc2hvd2luZyB6IGFuZCB6KiBtaXJyb3JlZCBhY3Jvc3MgdGhlIHJlYWwgYXhpcyIsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%

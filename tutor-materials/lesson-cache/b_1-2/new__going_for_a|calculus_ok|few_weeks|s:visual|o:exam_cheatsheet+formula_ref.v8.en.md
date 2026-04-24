# B.1-2 Algebra of Complex Numbers

> **Section Objective:** Master the two algebraic descriptions of a complex number — rectangular and polar — and connect them through Euler's formula.

---

Consider z = 3 + 4j. You already know how to plot it: 3 units right, 4 units up. But that same point can also be described by a **length** (how far it is from the origin) and an **angle** (the direction it points). Two descriptions, one point.

This section develops both descriptions precisely and shows how they are linked. The rectangular form z = a + jb stores horizontal and vertical components. The polar form stores distance r and angle θ. Euler's formula then compresses the polar form into a single exponential.

### COMMON TRAP

The real part **a** is not the magnitude **r**. Confusing these two is one of the most frequent exam errors in this topic.

In this section you will learn: (1) the exact meaning of rectangular form symbols, (2) how to convert between rectangular and polar using a = r cosθ and b = r sinθ, and (3) how Euler's formula gives the compact exponential form z = re^{jθ}.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*Fig. B.2 unifies both descriptions in one picture: the point z = a + jb sits at coordinates (a, b), its distance from the origin is the magnitude r, the angle it makes with the positive real axis is θ, and its conjugate z* = a − jb appears as the mirror reflection across the real axis.*

## 1. Rectangular Form and What the Symbols Mean

The rectangular form records a complex number by its **horizontal** and **vertical** components:

z = a + jb

The letter **a** is the horizontal displacement (real part) and **b** is the vertical displacement (imaginary part).

### WORKED EXAMPLE

For z = 3 + 4j:
- Re(z) = 3 (the coefficient in front of the real axis)
- Im(z) = 4 (the coefficient of j)

### EXAM TRAPS

**Trap 1 — Imaginary part includes j?** No. Im(z) = 4, not 4j. The imaginary part is the real number that multiplies j, not the full term.

**Trap 2 — Is a the magnitude?** No. The real part a = 3 is only the horizontal coordinate. The magnitude r is the distance from the origin and is generally larger than a.

#### Formula Reference

z = a + jb, where Re(z) = a and Im(z) = b. Both a and b are real numbers.

$$z = a + jb, \qquad \operatorname{Re}(z)=a, \qquad \operatorname{Im}(z)=b$$
*Rectangular form stores a complex number by its horizontal coordinate a and vertical coordinate b — note carefully that the imaginary part is the real number b, not the term jb.*

## 2. Polar Form: Length-Angle Description

Return to z = 3 + 4j. Instead of recording where the point sits on a grid, we can describe it by **how far** it is from the origin and **which direction** it points.

Let r be the distance from the origin and θ be the angle measured counterclockwise from the positive real axis.

### DERIVING THE CONNECTION

Draw a right triangle from the origin to the point (a, b). The hypotenuse has length r. By basic trigonometry:

- The horizontal leg equals r cosθ, so **a = r cosθ**
- The vertical leg equals r sinθ, so **b = r sinθ**

Now substitute these into z = a + jb:

z = r cosθ + j(r sinθ) = r(cosθ + j sinθ)

This is the **polar form** of z.

### KEY INSIGHT

r is the length of the hypotenuse. a is only one leg of the triangle. They are equal only in the special case θ = 0, and generally r > a. This distinction is critical: **r ≠ a in general**.

For z = 3 + 4j, the hypotenuse would be √(3² + 4²) = 5, which is larger than either component.

#### Formula Reference

a = r cosθ, b = r sinθ, and therefore z = r(cosθ + j sinθ).

$$a = r\cos\theta, \qquad b = r\sin\theta, \qquad z = a + jb = r(\cos\theta + j\sin\theta)$$
*These equations convert between the two descriptions of the same complex number: the left two expressions recover the rectangular components a and b from the polar data r and θ, while the full chain shows that rectangular and polar form are identical representations of z.*

## 3. Euler Form and How It Simplifies Algebra

Euler's formula states:

e^{jθ} = cosθ + j sinθ

This is not an approximation — it is an exact identity that connects the exponential function to trigonometry.

### FROM POLAR TO EXPONENTIAL

We already have the polar form z = r(cosθ + j sinθ). The bracket is exactly the right-hand side of Euler's formula. Substituting directly:

z = r(cosθ + j sinθ) = r · e^{jθ}

So the full chain is:

z = a + jb = r(cosθ + j sinθ) = re^{jθ}

### WHY THIS MATTERS

The exponential form packs the entire angle into a single term e^{jθ}. When multiplying or dividing complex numbers, working with exponents is far faster than expanding cosine-sine products.

### PRACTICE EXAMPLE

Given r = 2 and θ = π/6:
- Trigonometric form: z = 2(cos(π/6) + j sin(π/6))
- Exponential form: z = 2e^{jπ/6}

Both are exact. No decimal conversion is needed here.

#### Formula Reference

e^{jθ} = cosθ + j sinθ, therefore z = re^{jθ}.

$$e^{j\theta} = \cos\theta + j\sin\theta, \qquad z = re^{j\theta}$$
*Euler's formula compresses the cosine-sine pair into a single exponential expression, so the polar form of any complex number can be written compactly as z = re^{jθ}, where r is the magnitude and θ is the angle.*

---
**📌 Key Takeaways**
- Rectangular form z = a + jb stores horizontal component a and vertical component b.
- Polar relations: a = r cosθ and b = r sinθ connect both descriptions.
- Euler's formula gives the compact exponential form z = re^{jθ}.
- Critical trap: r is the distance from origin; a is only one coordinate — they differ.

*In the next section we will apply these forms to arithmetic operations — addition, multiplication, and division — and see why exponential form makes multiplication equivalent to scaling and rotating.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX2NvbXBvbmVudHMiLCJsYWJlbCI6IklkZW50aWZ5IHJlYWwgcGFydCBhbmQgaW1hZ2luYXJ5IHBhcnQgZnJvbSByZWN0YW5ndWxhciBmb3JtIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgeiA9IC0yICsgNWosIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gUmUoeikgPSAtMiBhbmQgSW0oeikgPSA1IiwiQi4gUmUoeikgPSAtMiBhbmQgSW0oeikgPSA1aiIsIkMuIFJlKHopID0gNSBhbmQgSW0oeikgPSAtMiIsIkQuIFJlKHopID0gLTJqIGFuZCBJbSh6KSA9IDUiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJJbiB6ID0gYSArIGpiLCB0aGUgcmVhbCBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudCB3aXRob3V0IGosIGFuZCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50IG9mIGouIFNvIFJlKHopID0gLTIgYW5kIEltKHopID0gNS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiI1aiBpcyB0aGUgaW1hZ2luYXJ5IHRlcm0gaW4gdGhlIGV4cHJlc3Npb24sIG5vdCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXRzZWxmLiIsIkMiOiJUaGlzIHN3YXBzIHRoZSBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBjb21wb25lbnRzLiIsIkQiOiJUaGUgcmVhbCBwYXJ0IGlzIGFsd2F5cyBhIHJlYWwgbnVtYmVyLCBub3QgYSB0ZXJtIGNvbnRhaW5pbmcgai4ifSwiaGludCI6IlJlYWQgeiBpbiB0aGUgdGVtcGxhdGUgYSArIGpiLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQSBzdHVkZW50IHNheXM6ICdGb3IgeiA9IDcgLSAzaiwgdGhlIGltYWdpbmFyeSBwYXJ0IGlzIC0zai4nIEV4cGxhaW4gcHJlY2lzZWx5IHdoYXQgaXMgd3Jvbmcgd2l0aCB0aGF0IHN0YXRlbWVudC4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIHJlYWwgY29lZmZpY2llbnQgb2Ygaiwgc28gSW0oeikgPSAtMy4gVGhlIHRlcm0gLTNqIGlzIHBhcnQgb2YgdGhlIGV4cHJlc3Npb24sIGJ1dCBpdCBpcyBub3QgdGhlIHZhbHVlIG9mIHRoZSBpbWFnaW5hcnkgcGFydC4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IHN0YXRlIHRoYXQgSW0oeikgPSAtMyIsIk11c3QgZGlzdGluZ3Vpc2ggaW1hZ2luYXJ5IHBhcnQgZnJvbSB0aGUgZnVsbCB0ZXJtIC0zaiIsIk11c3QgZXhwbGFpbiB0aGF0IGogaXMgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZSBvZiBJbSh6KSJdLCJleHBsYW5hdGlvbiI6IlRoaXMgdGVzdHMgd2hldGhlciB0aGUgc3R1ZGVudCBrbm93cyB0aGUgZXhhY3QgZGVmaW5pdGlvbiByYXRoZXIgdGhhbiByZWx5aW5nIG9uIHN5bWJvbCBtYXRjaGluZy4iLCJoaW50IjoiQXNrIHdoYXQgbnVtYmVyIG11bHRpcGxpZXMgai4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6InBvbGFyX3JlbGF0aW9ucyIsImxhYmVsIjoiQ29ubmVjdCByZWN0YW5ndWxhciBjb21wb25lbnRzIHRvIHBvbGFyIGRhdGEiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHBhaXIgb2YgZXF1YXRpb25zIGNvcnJlY3RseSByZWxhdGVzIHJlY3Rhbmd1bGFyIGFuZCBwb2xhciBxdWFudGl0aWVzIGZvciB6ID0gYSArIGpiPyIsIm9wdGlvbnMiOlsiQS4gYSA9IHIgc2luzrgsIGIgPSByIGNvc864IiwiQi4gYSA9IHIgY29zzrgsIGIgPSByIHNpbs64IiwiQy4gYSA9IM64IGNvcyByLCBiID0gzrggc2luIHIiLCJELiBhID0gciB0YW7OuCwgYiA9IHIgY290zrgiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgaG9yaXpvbnRhbCBjb21wb25lbnQgaXMgYWRqYWNlbnQgdG8gdGhlIGFuZ2xlLCBzbyBhID0gciBjb3POuCwgd2hpbGUgdGhlIHZlcnRpY2FsIGNvbXBvbmVudCBpcyBvcHBvc2l0ZSwgc28gYiA9IHIgc2luzrguIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBzd2FwcyBjb3NpbmUgYW5kIHNpbmUuIiwiQyI6InIgaXMgdGhlIG1hZ25pdHVkZSBhbmQgzrggaXMgdGhlIGFuZ2xlOyB0aGV5IGRvIG5vdCB0cmFkZSByb2xlcyB0aGlzIHdheS4iLCJEIjoiVGhlc2UgYXJlIG5vdCB0aGUgY29tcG9uZW50IGZvcm11bGFzIGZvciByZWN0YW5ndWxhciBjb29yZGluYXRlcy4ifSwiaGludCI6IlRoaW5rIGFkamFjZW50ID0gY29zaW5lLCBvcHBvc2l0ZSA9IHNpbmUuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InB5dGhvbl9tYXRwbG90bGliIGNvbXBsZXggcGxhbmUgdHJpYW5nbGUgd2l0aCByLCB0aGV0YSwgYSwgYiBsYWJlbGVkIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBwb2ludCBoYXMgcmVjdGFuZ3VsYXIgY29vcmRpbmF0ZXMgKGEsIGIpID0gKDMsIDQpLiBXaGljaCBzdGF0ZW1lbnQgaXMgdHJ1ZT8iLCJvcHRpb25zIjpbIkEuIHIgPSAzIGJlY2F1c2UgdGhlIHJlYWwgcGFydCBpcyAzIiwiQi4gciA9IDQgYmVjYXVzZSB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgNCIsIkMuIHIgaXMgZ2VuZXJhbGx5IGRpZmZlcmVudCBmcm9tIGJvdGggMyBhbmQgNCBiZWNhdXNlIGl0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4iLCJELiByIG11c3QgZXF1YWwgYSArIGIiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJUaGUgbWFnbml0dWRlIHIgaXMgdGhlIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiwgbm90IGp1c3Qgb25lIGNvb3JkaW5hdGUuIEZvciAoMywgNCksIHIgd291bGQgYmUgdGhlIGh5cG90ZW51c2UsIG5vdCBlaXRoZXIgbGVnLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSByZWFsIHBhcnQgYSBpcyBvbmx5IHRoZSBob3Jpem9udGFsIGNvbXBvbmVudC4iLCJCIjoiVGhlIGltYWdpbmFyeSBwYXJ0IGIgaXMgb25seSB0aGUgdmVydGljYWwgY29tcG9uZW50LiIsIkQiOiJNYWduaXR1ZGUgaXMgbm90IGZvdW5kIGJ5IHNpbXBsZSBhZGRpdGlvbiBvZiBjb29yZGluYXRlcy4ifSwiaGludCI6IkNvbXBhcmUgYSB0cmlhbmdsZSBsZWcgd2l0aCBpdHMgaHlwb3RlbnVzZS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoicHl0aG9uX21hdHBsb3RsaWIgcG9pbnQgKDMsNCkgd2l0aCByaWdodCB0cmlhbmdsZSB0byBvcmlnaW4iLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImVxdWl2YWxlbnRfZm9ybXMiLCJsYWJlbCI6IlJlY29nbml6ZSBlcXVpdmFsZW50IHRyaWcgYW5kIGV4cG9uZW50aWFsIGZvcm1zIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiVXNpbmcgRXVsZXIncyBmb3JtdWxhLCB3aGljaCBleHByZXNzaW9uIGlzIGVxdWl2YWxlbnQgdG8gcihjb3POuCArIGogc2luzrgpPyIsIm9wdGlvbnMiOlsiQS4gciBlXs64IiwiQi4gZV57anJ9IiwiQy4gciBlXntqzrh9IiwiRC4gcihjb3POuCAtIGogc2luzrgpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiRXVsZXIncyBmb3JtdWxhIGdpdmVzIGVee2rOuH0gPSBjb3POuCArIGogc2luzrgsIHNvIG11bHRpcGx5aW5nIGJ5IHIgeWllbGRzIHogPSByIGVee2rOuH0uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIGV4cG9uZW50IG11c3QgYmUgas64LCBub3QgzrggYWxvbmUuIiwiQiI6IlRoaXMgcHV0cyB0aGUgbWFnbml0dWRlIGluIHRoZSBleHBvbmVudCwgd2hpY2ggaXMgaW5jb3JyZWN0LiIsIkQiOiJUaGUgbWludXMgc2lnbiB3b3VsZCBjb3JyZXNwb25kIHRvIGVeey1qzrh9LCBub3QgZV57as64fS4ifSwiaGludCI6IlJlcGxhY2UgdGhlIGJyYWNrZXQgd2l0aCBFdWxlcidzIGZvcm11bGEgZXhhY3RseS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3AzX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJXcml0ZSB0aGUgY29tcGxleCBudW1iZXIgd2l0aCBtYWduaXR1ZGUgMiBhbmQgYW5nbGUgzrggPSDPgC82IGluIGJvdGggdHJpZ29ub21ldHJpYyBmb3JtIGFuZCBleHBvbmVudGlhbCBmb3JtLiIsImlkZWFsX2Fuc3dlciI6IlRyaWdvbm9tZXRyaWMgZm9ybTogeiA9IDIoY29zKM+ALzYpICsgaiBzaW4oz4AvNikpLiBFeHBvbmVudGlhbCBmb3JtOiB6ID0gMmVee2rPgC82fS4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IGluY2x1ZGUgbWFnbml0dWRlIDIgY29ycmVjdGx5IiwiTXVzdCB3cml0ZSBib3RoIGNvc2luZS1zaW5lIGZvcm0gYW5kIGV4cG9uZW50aWFsIGZvcm0iLCJNdXN0IGtlZXAgdGhlIGFuZ2xlIGFzIM+ALzYgaW4gYm90aCBmb3JtcyJdLCJleHBsYW5hdGlvbiI6IlRoaXMgdmVyaWZpZXMgdGhhdCB0aGUgc3R1ZGVudCBjYW4gbW92ZSBiZXR3ZWVuIHRoZSB0d28gcG9sYXItc3R5bGUgcmVwcmVzZW50YXRpb25zIGRpcmVjdGx5LiIsImhpbnQiOiJTdGFydCBmcm9tIHogPSByKGNvc864ICsgaiBzaW7OuCkgYW5kIHRoZW4gYXBwbHkgRXVsZXIncyBmb3JtdWxhLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%

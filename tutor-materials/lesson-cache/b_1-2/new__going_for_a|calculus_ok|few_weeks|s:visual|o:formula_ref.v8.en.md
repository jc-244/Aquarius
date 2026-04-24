# B.1-2 Algebra of Complex Numbers

> **Section Objective:** Understand how a single complex number can be written in rectangular form, polar form, and exponential form — and move fluently between all three.

---

Consider z = 3 + 4j. You already know how to plot it: 3 units right, 4 units up. But the same point can also be described by its **distance from the origin** and the **angle it makes with the positive real axis**. These are two equally valid descriptions of one number.

This section develops the algebra behind both views. The three goals are:

1. Identify the rectangular form z = a + jb and read off Re z and Im z precisely.
2. Connect rectangular to polar using a = r cos θ and b = r sin θ.
3. Use Euler's formula to compress cos θ + j sin θ into e^{jθ}, giving the compact exponential form z = re^{jθ}.

> **Exam Warning:** r is the distance from the origin — it is **not** the real part a. Confusing the two is one of the most common errors on this topic.

---

**Quick Reference**

| Form | Expression |
|------|------------|
| Rectangular | z = a + jb |
| Polar | z = r(cos θ + j sin θ) |
| Exponential | z = re^{jθ} |

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*The complex plane shows z = a + jb located at coordinates (a, b), with magnitude r measuring the full distance from the origin to the point and angle θ measured from the positive real axis, while the conjugate z* = a − jb appears as the mirror reflection across the real axis — together illustrating that rectangular coordinates (a, b) and polar data (r, θ) are two descriptions of the same number.*

## 1. Rectangular Form and What the Symbols Mean

Start with the concrete case: z = 3 + 4j.

- The number to the left of the + sign, **3**, is the **horizontal coordinate** on the complex plane.
- The coefficient of j, **4**, is the **vertical coordinate**.

In general, for z = a + jb:

- **Re z = a** — the real part is the plain number a, with no j attached.
- **Im z = b** — the imaginary part is the real-number coefficient of j, not the term bj itself.

### COMMON MISTAKE

Im z = b, not bj. The symbol j is the axis marker; it is not part of the value of the imaginary part.

**Micro-check:** For z = 5 − 2j, we have Re z = 5 and Im z = −2.

---

**Quick Reference**

| Symbol | Meaning |
|--------|---------|
| z = a + jb | Rectangular form |
| Re z = a | Real part |
| Im z = b | Imaginary part (a real number) |

$$z = a + jb = r(\cos\theta + j\sin\theta)$$
*This formula states that a single complex number can be written either by its rectangular coordinates (a, b) or by its polar data — distance r from the origin and angle θ from the positive real axis — and both sides refer to exactly the same point on the complex plane.*

## 2. Converting Rectangular Form to Polar Form

Begin with z = 3 + 4j and derive the polar description step by step.

1. Identify the coordinates: a = 3, b = 4.
2. Compute the magnitude (distance from origin): r = √(a² + b²) = √(9 + 16) = √25 = **5**.
3. Find the angle: cos θ = a/r = 3/5 and sin θ = b/r = 4/5.
4. Write the polar form: z = 5(cos θ + j sin θ).

The general rule follows directly from the same geometry. If z = a + jb, then:

- a = r cos θ (horizontal projection of the radius)
- b = r sin θ (vertical projection of the radius)
- r = √(a² + b²)

So z = r(cos θ + j sin θ).

### KEY INSIGHT

**a is one coordinate; r is the full distance from the origin.** For z = 3 + 4j, a = 3 but r = 5. They are different quantities. Also note that r ≥ 0 always — the magnitude is never negative in the standard polar description.

---

**Quick Reference**

| Quantity | Formula |
|----------|---------|
| Magnitude | r = √(a² + b²) |
| Horizontal | a = r cos θ |
| Vertical | b = r sin θ |

Think of two ways to give someone directions to the same destination.

**Rectangular form** says: "Go 3 units to the right along the real axis, then 4 units straight up." You specify two independent steps — a horizontal displacement a and a vertical displacement b.

**Polar form** says: "Start at the origin, face an angle θ above the real axis, and walk r units in that direction." One distance, one angle — same arrival point.

The formulas a = r cos θ and b = r sin θ are simply the geometry that connects these two sets of directions. The horizontal step a is the shadow the radius r casts onto the real axis (scaled by cos θ), and the vertical step b is the shadow it casts onto the imaginary axis (scaled by sin θ).

#### Remember

The distance r is the length of the full diagonal path from the origin. It is not the same as the horizontal step a. For z = 3 + 4j, walking 3 units right is not the same as walking 5 units diagonally.

## 3. Euler's Formula and Exponential Form

We now have the polar form z = r(cos θ + j sin θ). The bracket cos θ + j sin θ appears so often in signal analysis that it has its own compact notation.

**Euler's formula** is the standard identity:

e^{jθ} = cos θ + j sin θ

This is not derived here from series — it is accepted as a foundational result of complex analysis. The key point is that the exponential e^{jθ} packages the sine-cosine pair into a single factor.

Substituting into the polar form proceeds in two explicit steps:

1. Recognize the bracket: cos θ + j sin θ = e^{jθ}.
2. Replace it: z = r(cos θ + j sin θ) = r · e^{jθ}.

The result is the **exponential form**: z = re^{jθ}.

Interpretation: e^{jθ} encodes **direction** on the complex plane (a unit-length pointer at angle θ), while r **scales** that pointer to the correct length.

---

**Quick Reference**

| Identity | Expression |
|----------|------------|
| Euler's formula | e^{jθ} = cos θ + j sin θ |
| Exponential form | z = re^{jθ} |

---
**📌 Key Takeaways**
- Rectangular form z = a + jb: Re z = a and Im z = b, where b is a real number, not bj.
- Polar form z = r(cos θ + j sin θ): r = √(a² + b²) is the full distance from the origin, not the real part a.
- Euler's formula e^{jθ} = cos θ + j sin θ compresses polar form into the compact exponential z = re^{jθ}.

*In the next section we will use these forms to simplify complex-number calculations.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJSZWN0YW5ndWxhciBmb3JtIGFuZCBpZGVudGlmeWluZyByZWFsL2ltYWdpbmFyeSBwYXJ0cyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSA1IC0gMmosIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gUmUgeiA9IC0yIGFuZCBJbSB6ID0gNSIsIkIuIFJlIHogPSA1IGFuZCBJbSB6ID0gLTIiLCJDLiBSZSB6ID0gNSBhbmQgSW0geiA9IC0yaiIsIkQuIFJlIHogPSA1aiBhbmQgSW0geiA9IC0yIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiSW4geiA9IGEgKyBqYiwgdGhlIHJlYWwgcGFydCBpcyB0aGUgY29lZmZpY2llbnQgd2l0aG91dCBqIGFuZCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIHJlYWwtbnVtYmVyIGNvZWZmaWNpZW50IG9mIGouIFNvIFJlIHogPSA1IGFuZCBJbSB6ID0gLTIuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBzd2FwcyB0aGUgcmVhbCBhbmQgaW1hZ2luYXJ5IHBhcnRzLiIsIkMiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50IC0yLCBub3QgdGhlIHRlcm0gLTJqLiIsIkQiOiJUaGUgcmVhbCBwYXJ0IGNhbm5vdCBpbmNsdWRlIGouIn0sImhpbnQiOiJSZWFkIHRoZSBjb2VmZmljaWVudCBvZiBqIHNlcGFyYXRlbHkgZnJvbSB0aGUgc3ltYm9sIGouIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJBIHN0dWRlbnQgc2F5cywgJ0ZvciB6ID0gNyArIDNqLCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgM2ouJyBFeHBsYWluIHByZWNpc2VseSB3aGF0IGlzIHdyb25nIHdpdGggdGhhdCBzdGF0ZW1lbnQuIiwiaWRlYWxfYW5zd2VyIjoiVGhlIGltYWdpbmFyeSBwYXJ0IGlzIHRoZSByZWFsLW51bWJlciBjb2VmZmljaWVudCBvZiBqLCBzbyBpdCBpcyAzLiBUaGUgdGVybSAzaiBpcyB0aGUgaW1hZ2luYXJ5IHRlcm0gaW4gdGhlIGV4cHJlc3Npb24sIGJ1dCBJbSB6ID0gMy4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IHN0YXRlIHRoYXQgSW0geiA9IDMiLCJNdXN0IGRpc3Rpbmd1aXNoIGltYWdpbmFyeSBwYXJ0IGZyb20gaW1hZ2luYXJ5IHRlcm0iLCJNdXN0IG5vdGUgdGhhdCBqIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWUgb2YgdGhlIGltYWdpbmFyeSBwYXJ0Il0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3MgcHJlY2lzZSBub3RhdGlvbiwgYSBjb21tb24gZXhhbSB0cmFwLiIsImhpbnQiOiJBc2sgd2hhdCBudW1iZXIgbXVsdGlwbGllcyBqLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoicmVjdGFuZ3VsYXJfdG9fcG9sYXIiLCJsYWJlbCI6IlJlbGF0aW5nIGEsIGIsIHIsIGFuZCDOuCIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgeiA9IGEgKyBqYiBoYXMgcG9sYXIgY29vcmRpbmF0ZXMgKHIsIM64KSwgd2hpY2ggcGFpciBvZiByZWxhdGlvbnMgaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIGEgPSByIHNpbiDOuCwgYiA9IHIgY29zIM64IiwiQi4gYSA9IHIgY29zIM64LCBiID0gciBzaW4gzrgiLCJDLiBhID0gY29zIM64LCBiID0gc2luIM64IiwiRC4gYSA9IHIgdGFuIM64LCBiID0gciBjb3QgzrgiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJJbiB0aGUgY29tcGxleCBwbGFuZSwgdGhlIGhvcml6b250YWwgY29vcmRpbmF0ZSBpcyByIGNvcyDOuCBhbmQgdGhlIHZlcnRpY2FsIGNvb3JkaW5hdGUgaXMgciBzaW4gzrguIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBpbmNvcnJlY3RseSBzd2FwcyBjb3NpbmUgYW5kIHNpbmUuIiwiQyI6IlRoaXMgb21pdHMgdGhlIHNjYWxpbmcgYnkgci4iLCJEIjoiVGhlc2UgYXJlIG5vdCB0aGUgY29vcmRpbmF0ZSByZWxhdGlvbnMuIn0sImhpbnQiOiJUaGluayBvZiBzdGFuZGFyZCBwb2xhci10by1DYXJ0ZXNpYW4gY29udmVyc2lvbi4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoicHl0aG9uX21hdHBsb3RsaWIgY29tcGxleCBwbGFuZSBzaG93aW5nIHBvaW50LCByYWRpdXMgciwgYW5nbGUgzrgsIGFuZCBob3Jpem9udGFsL3ZlcnRpY2FsIHByb2plY3Rpb25zIGxhYmVsZWQgYSBhbmQgYiIsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciB6ID0gMyArIDRqLCB3aGljaCBzdGF0ZW1lbnQgaXMgdHJ1ZT8iLCJvcHRpb25zIjpbIkEuIFRoZSBtYWduaXR1ZGUgciBlcXVhbHMgMyBiZWNhdXNlIHRoZSByZWFsIHBhcnQgaXMgMyIsIkIuIFRoZSBtYWduaXR1ZGUgciBlcXVhbHMgNCBiZWNhdXNlIHRoZSBpbWFnaW5hcnkgcGFydCBpcyA0IiwiQy4gVGhlIG1hZ25pdHVkZSByIGVxdWFscyA1IGJlY2F1c2UgciA9IHNxcnQoM8KyICsgNMKyKSIsIkQuIFRoZSBtYWduaXR1ZGUgciBlcXVhbHMgNyBiZWNhdXNlIDMgKyA0ID0gNyJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6Ik1hZ25pdHVkZSBpcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luLCBzbyByID0gc3FydChhwrIgKyBiwrIpID0gc3FydCg5ICsgMTYpID0gNS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgcmVhbCBwYXJ0IGlzIG9ubHkgdGhlIGhvcml6b250YWwgY29vcmRpbmF0ZSwgbm90IHRoZSBmdWxsIGRpc3RhbmNlLiIsIkIiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgb25seSB0aGUgdmVydGljYWwgY29vcmRpbmF0ZSwgbm90IHRoZSBmdWxsIGRpc3RhbmNlLiIsIkQiOiJNYWduaXR1ZGUgaXMgbm90IGZvdW5kIGJ5IGFkZGluZyBjb29yZGluYXRlcy4ifSwiaGludCI6IlVzZSB0aGUgZGlzdGFuY2UgZm9ybXVsYSBmcm9tIHRoZSBvcmlnaW4uIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AyX3EzIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIHBvaW50IGluIHRoZSBjb21wbGV4IHBsYW5lIGhhcyBwb2xhciBjb29yZGluYXRlcyAociwgzrgpLiBXaGljaCBxdWFudGl0eSByZXByZXNlbnRzIHRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50PyIsIm9wdGlvbnMiOlsiQS4gciIsIkIuIM64IiwiQy4gciBjb3MgzrgiLCJELiByIHNpbiDOuCJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgaXMgYSA9IHIgY29zIM64LCB3aGlsZSB0aGUgdmVydGljYWwgY29vcmRpbmF0ZSBpcyBiID0gciBzaW4gzrguIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiciBpcyB0aGUgZnVsbCBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4sIG5vdCBhIGNvb3JkaW5hdGUuIiwiQiI6Is64IGlzIGFuIGFuZ2xlLCBub3QgYSBjb29yZGluYXRlIHZhbHVlLiIsIkQiOiJyIHNpbiDOuCBnaXZlcyB0aGUgdmVydGljYWwgY29vcmRpbmF0ZS4ifSwiaGludCI6Ikhvcml6b250YWwgbWVhbnMgdGhlIHJlYWwtYXhpcyBjb29yZGluYXRlLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiZXVsZXJfZXhwb25lbnRpYWxfZm9ybSIsImxhYmVsIjoiRXVsZXIncyBmb3JtdWxhIGFuZCBleHBvbmVudGlhbCBmb3JtIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggZXhwcmVzc2lvbiBpcyBlcXVpdmFsZW50IHRvIGNvcyDOuCArIGogc2luIM64PyIsIm9wdGlvbnMiOlsiQS4gZV7OuCIsIkIuIGplXs64IiwiQy4gZV57as64fSIsIkQuIHJlXntqzrh9Il0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiRXVsZXIncyBmb3JtdWxhIHN0YXRlcyBlXntqzrh9ID0gY29zIM64ICsgaiBzaW4gzrguIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBpcyBhIHJlYWwgZXhwb25lbnRpYWwgYW5kIGRvZXMgbm90IG1hdGNoIHRoZSBzaW5lLWNvc2luZSBjb21iaW5hdGlvbi4iLCJCIjoiVGhlIGV4dHJhIGZhY3RvciBqIG1ha2VzIGl0IGRpZmZlcmVudC4iLCJEIjoiVGhpcyBpbmNsdWRlcyBhbiBhZGRpdGlvbmFsIHNjYWxlIGZhY3RvciByLiJ9LCJoaW50IjoiUmVjYWxsIEV1bGVyJ3MgZm9ybXVsYSBleGFjdGx5LiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%

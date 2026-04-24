# B.1-2 Algebra of Complex Numbers

> **Section Objective:** Master the three forms of a complex number — rectangular, polar, and Euler — and learn to move between them fluently.

If complex numbers make you nervous, here is the reassuring truth: most engineering problems start and end with real numbers. Complex numbers are simply a powerful shortcut for the middle steps — they compress what would otherwise be pages of trigonometry into clean, compact algebra.

This section covers three things that appear regularly on exams:

1. **Rectangular form** z = a + jb — reading the real and imaginary parts directly
2. **The complex plane** — picturing z as a point with coordinates (a, b)
3. **Polar and Euler form** — describing the same point by its distance r and angle θ

Master these three views and you will be able to read magnitude, angle, and coordinates from a single expression.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*Figure B.2 shows z = a + jb as the point (a, b) on the complex plane, with magnitude r measuring the distance from the origin, angle θ measured from the positive real axis, and the conjugate z* = a − jb appearing as the mirror reflection of z across the real axis.*

## 1. Rectangular Form on the Complex Plane

The expression z = a + jb is an instruction: **go a units along the real (horizontal) axis, then b units along the imaginary (vertical) axis.** The result is a single point on the complex plane.

The two coordinates have formal names:

- **Re(z) = a** — the real part (horizontal position)
- **Im(z) = b** — the imaginary part (vertical position)

### COMMON EXAM MISTAKE

The imaginary part is **b**, not **jb**. The symbol j is the axis marker, not part of the coordinate value. Im(z) is always a plain real number.

#### Worked Example

For z = 3 − 2j:
- The point on the complex plane is **(3, −2)**
- Re(z) = **3**
- Im(z) = **−2** (not −2j)

Think of the complex plane exactly like an x-y graph — the real axis is your x-axis and the imaginary axis is your y-axis.

$$z = a + jb \quad\text{with}\quad \operatorname{Re}(z)=a,\; \operatorname{Im}(z)=b$$
*Rectangular form records a complex number by its horizontal coordinate a along the real axis and its vertical coordinate b along the imaginary axis.*

## 2. Polar Form: Same Point, Different Description

Rectangular form tells you **where** a point is by its x-y location. Polar form tells you the same thing using **distance and direction** instead.

From the figure, you can see that the point (a, b) sits at a distance r from the origin and at an angle θ measured counterclockwise from the positive real axis. Basic trigonometry links the two descriptions:

- **a = r cos θ** — horizontal reach of the arrow
- **b = r sin θ** — vertical reach of the arrow

Substituting directly into z = a + jb gives the polar form:

**z = r(cos θ + j sin θ)**

Same point, two passports.

### WHY THIS MATTERS FOR THE EXAM

In AC circuit analysis, signals are described by their magnitude and phase angle. Polar form puts those two quantities front and center — r is the magnitude and θ is the phase — making it far easier to read and compare signals than the rectangular form alone.

#### Note

The quantity r is always non-negative. It is the straight-line distance from the origin to the point.

$$a = r\cos\theta,\qquad b = r\sin\theta,\qquad z = a+jb = r(\cos\theta + j\sin\theta)$$
*These equations convert the same complex number between its coordinate form (a, b) and its magnitude-angle form (r, θ), showing that the two descriptions are fully interchangeable.*

## 3. Euler's Formula Ties It Together

The polar expression r(cos θ + j sin θ) appears so often in engineering that mathematicians gave it a shorthand. **Euler's formula** states:

**e^{jθ} = cos θ + j sin θ**

This means the full complex number can be written compactly as z = re^{jθ}. The cosine supplies the horizontal component, the sine supplies the vertical component, and e^{jθ} packages a single direction on the complex plane into one tidy symbol.

### THE CONJUGATE

Looking back at Figure B.2, notice the point z* = a − jb sitting below the real axis. This is the **complex conjugate** of z: flip the sign of the imaginary part and you reflect the point across the real axis. The magnitude r stays the same; only the direction of the angle changes from +θ to −θ.

> **Key fact:** z and z* are mirror images across the real axis.

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula is the shortcut that collapses the cosine-sine polar expression into a single compact exponential, enabling the concise notation z = re^{jθ}.*

---
**📌 Key Takeaways**
- Rectangular form z = a + jb identifies the real coordinate a and imaginary coordinate b directly.
- Polar form z = r(cos θ + j sin θ) identifies magnitude r and angle θ from the origin.
- Euler's formula e^{jθ} = cos θ + j sin θ connects polar form to compact exponential notation.

*In the next section we will apply these forms to the algebra of complex numbers — addition, multiplication, and division — and see why polar form makes multiplication especially elegant.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJJZGVudGlmeSByZWN0YW5ndWxhciBmb3JtLCByZWFsIHBhcnQsIGFuZCBpbWFnaW5hcnkgcGFydCIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSA0IC0gM2osIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gUmUoeikgPSA0IGFuZCBJbSh6KSA9IC0zIiwiQi4gUmUoeikgPSAtMyBhbmQgSW0oeikgPSA0IiwiQy4gUmUoeikgPSA0IGFuZCBJbSh6KSA9IC0zaiIsIkQuIFJlKHopID0gNGogYW5kIEltKHopID0gLTMiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJJbiB6ID0gYSArIGpiLCB0aGUgcmVhbCBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudCB3aXRob3V0IGosIGFuZCB0aGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50IG9mIGouIFNvIFJlKHopID0gNCBhbmQgSW0oeikgPSAtMy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIHN3YXBzIHRoZSBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBjb21wb25lbnRzLiIsIkMiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50IC0zLCBub3QgdGhlIHRlcm0gLTNqLiIsIkQiOiJUaGUgcmVhbCBwYXJ0IGNhbm5vdCBpbmNsdWRlIGouIn0sImhpbnQiOiJSZWFkIHRoZSBudW1iZXIgYXMgaG9yaXpvbnRhbCBwYXJ0IHBsdXMgaiB0aW1lcyB2ZXJ0aWNhbCBjb2VmZmljaWVudC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkEgc3R1ZGVudCBzYXlzOiAnVGhlIGltYWdpbmFyeSBwYXJ0IG9mIDQgLSAzaiBpcyAtM2ouJyBFeHBsYWluIHByZWNpc2VseSB3aGF0IGlzIHdyb25nIHdpdGggdGhhdCBzdGF0ZW1lbnQuIiwiaWRlYWxfYW5zd2VyIjoiVGhlIGltYWdpbmFyeSBwYXJ0IGlzIHRoZSByZWFsIGNvZWZmaWNpZW50IG9mIGosIHNvIGl0IGlzIC0zLiBUaGUgdGVybSAtM2ogaXMgdGhlIGltYWdpbmFyeSB0ZXJtIGluIHRoZSBleHByZXNzaW9uLCBub3QgdGhlIGltYWdpbmFyeSBwYXJ0IGl0c2VsZi4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IHN0YXRlIHRoYXQgSW0oeikgPSAtMyIsIk11c3QgZGlzdGluZ3Vpc2ggY29lZmZpY2llbnQgZnJvbSBmdWxsIHRlcm0iLCJNdXN0IGV4cGxhaW4gdGhhdCBqIGlzIG5vdCBwYXJ0IG9mIHRoZSBpbWFnaW5hcnkgcGFydCB2YWx1ZSJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIGEgdmVyeSBjb21tb24gZXhhbSBtaXN0YWtlOiBjb25mdXNpbmcgdGhlIGNvZWZmaWNpZW50IHdpdGggdGhlIHdob2xlIGotdGVybS4iLCJoaW50IjoiU2VwYXJhdGUgdGhlIG51bWJlciBhdHRhY2hlZCB0byBqIGZyb20gdGhlIHN5bWJvbCBqIGl0c2VsZi4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImNvbXBsZXhfcGxhbmVfaW50ZXJwcmV0YXRpb24iLCJsYWJlbCI6IkludGVycHJldCBhIGNvbXBsZXggbnVtYmVyIGFzIGEgcG9pbnQgb24gdGhlIGNvbXBsZXggcGxhbmUiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHBvaW50IG9uIHRoZSBjb21wbGV4IHBsYW5lIHJlcHJlc2VudHMgeiA9IC0yICsgNWo/Iiwib3B0aW9ucyI6WyJBLiAoLTIsIDUpIiwiQi4gKDUsIC0yKSIsIkMuICgtMiwgLTUpIiwiRC4gKDIsIDUpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiVGhlIHJlYWwgcGFydCBnaXZlcyB0aGUgaG9yaXpvbnRhbCBjb29yZGluYXRlIGFuZCB0aGUgaW1hZ2luYXJ5IHBhcnQgZ2l2ZXMgdGhlIHZlcnRpY2FsIGNvb3JkaW5hdGUsIHNvIHogPSAtMiArIDVqIGNvcnJlc3BvbmRzIHRvICgtMiwgNSkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhpcyBzd2FwcyByZWFsIGFuZCBpbWFnaW5hcnkgY29vcmRpbmF0ZXMuIiwiQyI6IlRoZSBpbWFnaW5hcnkgcGFydCBpcyArNSwgbm90IC01LiIsIkQiOiJUaGUgcmVhbCBwYXJ0IGlzIC0yLCBub3QgKzIuIn0sImhpbnQiOiJNYXAgeiA9IGEgKyBqYiB0byB0aGUgcG9pbnQgKGEsIGIpLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJweXRob25fbWF0cGxvdGxpYl9jb21wbGV4X3BsYW5lX3BvaW50Iiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoicG9sYXJfcmVsYXRpb25zaGlwcyIsImxhYmVsIjoiQ29ubmVjdCByZWN0YW5ndWxhciBhbmQgcG9sYXIgZGVzY3JpcHRpb25zIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiBhIGNvbXBsZXggbnVtYmVyIGhhcyBwb2xhciBjb29yZGluYXRlcyAociwgzrgpLCB3aGljaCBwYWlyIG9mIGVxdWF0aW9ucyBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gYSA9IHIgc2luIM64LCBiID0gciBjb3MgzrgiLCJCLiBhID0gciBjb3MgzrgsIGIgPSByIHNpbiDOuCIsIkMuIGEgPSDOuCBjb3MgciwgYiA9IM64IHNpbiByIiwiRC4gYSA9IHIgdGFuIM64LCBiID0gciJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6Ik9uIHRoZSBjb21wbGV4IHBsYW5lLCB0aGUgaG9yaXpvbnRhbCBjb29yZGluYXRlIGlzIHIgY29zIM64IGFuZCB0aGUgdmVydGljYWwgY29vcmRpbmF0ZSBpcyByIHNpbiDOuC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIHJldmVyc2VzIHRoZSBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCByb2xlcy4iLCJDIjoiVGhpcyBpbmNvcnJlY3RseSB0cmVhdHMgzrggYXMgdGhlIHJhZGlhbCBxdWFudGl0eS4iLCJEIjoiVGhlc2UgYXJlIG5vdCB0aGUgY29vcmRpbmF0ZSByZWxhdGlvbnMgZm9yIHBvbGFyIGZvcm0uIn0sImhpbnQiOiJUaGluayByaWdodCB0cmlhbmdsZTogY29zaW5lIGdpdmVzIGFkamFjZW50LCBzaW5lIGdpdmVzIG9wcG9zaXRlLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggZXhwcmVzc2lvbiBpcyBleGFjdGx5IGVxdWl2YWxlbnQgdG8geiA9IGEgKyBqYiB3aGVuIGEgPSByIGNvcyDOuCBhbmQgYiA9IHIgc2luIM64PyIsIm9wdGlvbnMiOlsiQS4geiA9IHIoY29zIM64IC0gaiBzaW4gzrgpIiwiQi4geiA9IHIoc2luIM64ICsgaiBjb3MgzrgpIiwiQy4geiA9IHIoY29zIM64ICsgaiBzaW4gzrgpIiwiRC4geiA9IGEociArIGrOuCkiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJTdWJzdGl0dXRpbmcgYSA9IHIgY29zIM64IGFuZCBiID0gciBzaW4gzrggaW50byB6ID0gYSArIGpiIGdpdmVzIHogPSByKGNvcyDOuCArIGogc2luIM64KS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgc2lnbiBvZiB0aGUgaW1hZ2luYXJ5IHBhcnQgaGFzIGJlZW4gY2hhbmdlZC4iLCJCIjoiU2luZSBhbmQgY29zaW5lIGhhdmUgYmVlbiBzd2FwcGVkLiIsIkQiOiJUaGlzIGlzIG5vdCBhIHZhbGlkIGVxdWl2YWxlbnQgZm9ybS4ifSwiaGludCI6IlJlcGxhY2UgYSBhbmQgYiBkaXJlY3RseSBhbmQgZmFjdG9yIG91dCByLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiZXVsZXJfYW5kX2Nvbmp1Z2F0ZSIsImxhYmVsIjoiUmVjb2duaXplIEV1bGVyJ3MgZm9ybXVsYSBhbmQgdGhlIGdlb21ldHJpYyBtZWFuaW5nIG9mIHRoZSBjb25qdWdhdGUiLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A0X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJFdWxlcidzIGZvcm11bGEgYWxsb3dzIGNvcyDOuCArIGogc2luIM64IHRvIGJlIHJld3JpdHRlbiBhczoiLCJvcHRpb25zIjpbIkEuIGVeey1qzrh9IiwiQi4gamVee864fSIsIkMuIGVee2rOuH0iLCJELiByIGVee2rOuH0iXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJFdWxlcidzIGZvcm11bGEgc3RhdGVzIGRpcmVjdGx5IHRoYXQgZV57as64fSA9IGNvcyDOuCArIGogc2luIM64LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgd291bGQgY2hhbmdlIHRoZSBzaWduIG9mIHRoZSBpbWFnaW5hcnkgY29tcG9uZW50LiIsIkIiOiJUaGlzIGlzIG5vdCBFdWxlcidzIGZvcm11bGEuIiwiRCI6IlRoZSBmYWN0b3IgciBpcyBvbmx5IGluY2x1ZGVkIHdoZW4gd3JpdGluZyB6ID0gciBlXntqzrh9LCBub3QgY29zIM64ICsgaiBzaW4gzrggYWxvbmUuIn0sImhpbnQiOiJNYXRjaCB0aGUgdGV4dGJvb2sgaWRlbnRpdHkgZXhhY3RseS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3A0X3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiB6ID0gYSArIGpiLCB3aGF0IGlzIHRoZSBnZW9tZXRyaWMgZWZmZWN0IG9mIGZvcm1pbmcgeiogPSBhIC0gamI/Iiwib3B0aW9ucyI6WyJBLiBSb3RhdGlvbiBieSA5MCBkZWdyZWVzIiwiQi4gUmVmbGVjdGlvbiBhY3Jvc3MgdGhlIHJlYWwgYXhpcyIsIkMuIFJlZmxlY3Rpb24gYWNyb3NzIHRoZSBpbWFnaW5hcnkgYXhpcyIsIkQuIERvdWJsaW5nIHRoZSBtYWduaXR1ZGUiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJDaGFuZ2luZyAramIgdG8gLWpiIGtlZXBzIHRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgdGhlIHNhbWUgYW5kIGZsaXBzIHRoZSB2ZXJ0aWNhbCBjb29yZGluYXRlLCB3aGljaCByZWZsZWN0cyB0aGUgcG9pbnQgYWNyb3NzIHRoZSByZWFsIGF4aXMuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiQSBzaWduIGNoYW5nZSBpbiB0aGUgaW1hZ2luYXJ5IGNvbXBvbmVudCBpcyBub3QgYSA5MC1kZWdyZWUgcm90YXRpb24uIiwiQyI6IlJlZmxlY3Rpb24gYWNyb3NzIHRoZSBpbWFnaW5hcnkgYXhpcyB3b3VsZCBjaGFuZ2UgYSB0byAtYS4iLCJEIjoiQ29uanVnYXRpb24gZG9lcyBub3QgZG91YmxlIHRoZSBtYWduaXR1ZGUuIn0sImhpbnQiOiJXaGF0IGhhcHBlbnMgdG8gdGhlIHktY29vcmRpbmF0ZSB3aGVuIG9ubHkgaXRzIHNpZ24gY2hhbmdlcz8iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoicHl0aG9uX21hdHBsb3RsaWJfY29tcGxleF9wbGFuZV9jb25qdWdhdGVfcmVmbGVjdGlvbiIsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%

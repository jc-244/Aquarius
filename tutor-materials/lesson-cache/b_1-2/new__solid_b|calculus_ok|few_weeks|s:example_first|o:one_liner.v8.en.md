# B.1-2 Algebra of Complex Numbers

> **Section Objective:** Learn to read, write, and convert complex numbers in rectangular, polar, and exponential form.

Take the number z = 3 + 4j. You can read it two ways: as an algebraic expression with a real part and an imaginary part, or as the point (3, 4) on a two-dimensional plane. Both readings describe exactly the same thing.

This section builds the basic algebraic language of complex numbers. You will learn to identify the real part and imaginary part of any complex number, plot it on the complex plane, and then re-express it using magnitude and angle — the polar form. Finally, you will see how Euler's formula compresses that polar form into a compact exponential.

This language matters for exams and for later engineering math: complex numbers often simplify calculations even when the final answer is a plain real number. We begin with coordinates and work our way toward magnitude and angle.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*This figure is the core map for the entire section: it shows a complex number z = a + jb as a point with rectangular coordinates (a, b), magnitude r, angle θ measured from the positive real axis, and its conjugate z* = a − jb reflected across the real axis.*

## 1. Rectangular Form and the Complex Plane

Start with a concrete example: z = 3 + 4j. The number 3 tells you how far to move horizontally (to the right), and 4 tells you how far to move vertically (upward). That puts the point at (3, 4) on the complex plane.

The general rule is:

$$z = a + jb$$

where **a is the real part** (horizontal coordinate) and **b is the imaginary part** (vertical coordinate). In notation:

- Re(z) = a
- Im(z) = b

### COMMON EXAM MISTAKE

The imaginary part is **b**, not **jb**. Im(z) is a plain real number — the coefficient of j. Writing Im(z) = jb is a notation error that costs marks.

#### Example

For z = 3 + 4j: Re(z) = 3 and Im(z) = 4. For z = 7 − 3j: Re(z) = 7 and Im(z) = −3.

Every complex number in rectangular form is just a point on a flat plane. The real axis runs left-right; the imaginary axis runs up-down.

$$z = a + jb \quad \text{with} \quad \operatorname{Re}(z)=a,\; \operatorname{Im}(z)=b$$
*Rectangular form describes a complex number by its horizontal component a (the real part) and its vertical component b (the imaginary part), placing it as a point on the two-dimensional complex plane.*

## 2. From Rectangular Form to Polar Form

Return to z = 3 + 4j. So far we described that point by saying "right 3, up 4." There is a second equally valid description: state how far the point is from the origin, and at what angle from the positive real axis.

That distance is called the **magnitude** r, and the angle is called **θ** (theta). The connection back to rectangular coordinates is:

$$a = r\cos\theta, \qquad b = r\sin\theta$$

Substituting into z = a + jb gives the **polar form**:

$$z = r(\cos\theta + j\sin\theta)$$

### KEY INSIGHT

This is not a new number — it is the same point, just described in a different coordinate system. Rectangular form says where you are by horizontal and vertical steps; polar form says where you are by distance and direction.

### WHY THIS MATTERS FOR THE EXAM

You will be asked to convert between forms. Always check: does the problem give you (a, b) and ask for (r, θ), or the reverse? The formulas above handle both directions.

$$a = r\cos\theta, \qquad b = r\sin\theta, \qquad z = a+jb = r(\cos\theta + j\sin\theta)$$
*Polar form rewrites the same complex number using magnitude r (distance from the origin) and angle θ (direction from the positive real axis) instead of horizontal and vertical coordinates.*

## 3. Euler Form and Why It Is Useful

The polar form contains the expression cos θ + j sin θ. Euler's formula gives this combination a compact name:

$$e^{j\theta} = \cos\theta + j\sin\theta$$

This means the full polar form z = r(cos θ + j sin θ) can be written as:

$$z = re^{j\theta}$$

This is called the **exponential form** (or Euler form). We are not deriving the formula here — just using it as a shorthand.

### WHY THIS MATTERS FOR THE EXAM

Exponential form makes later algebra much cleaner. When you multiply two complex numbers in exponential form, the magnitudes multiply and the angles add — a single line of algebra. Division, powers, and rotation all follow the same simple pattern. You will use this form repeatedly in later topics.

#### Note

Euler form, polar form, and rectangular form all represent the same complex number. Choosing which form to use is a matter of which operation you need to perform.

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula packages the cosine and sine of an angle into a single compact exponential, making it straightforward to write and manipulate complex numbers in polar form.*

---
**📌 Key Takeaways**
- Rectangular form z = a + jb: Re(z) = a and Im(z) = b (not jb) — a point on the complex plane.
- Polar form z = r(cos θ + j sin θ): same point described by magnitude r and angle θ.
- Euler form z = re^(jθ): compact exponential shorthand for polar form, essential for later algebra.

*In the next section we will apply these forms to arithmetic operations — addition, multiplication, and division of complex numbers — and see why exponential form makes multiplication as simple as adding exponents.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJSZWN0YW5ndWxhciBmb3JtIGFuZCBpZGVudGlmeWluZyByZWFsL2ltYWdpbmFyeSBwYXJ0cyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSA3IC0gM2osIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gUmUoeikgPSA3IGFuZCBJbSh6KSA9IC0zIiwiQi4gUmUoeikgPSA3IGFuZCBJbSh6KSA9IC0zaiIsIkMuIFJlKHopID0gLTMgYW5kIEltKHopID0gNyIsIkQuIFJlKHopID0gN2ogYW5kIEltKHopID0gLTMiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJJbiB6ID0gYSArIGpiLCB0aGUgcmVhbCBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudC1mcmVlIGhvcml6b250YWwgdmFsdWUgYSwgYW5kIHRoZSBpbWFnaW5hcnkgcGFydCBpcyB0aGUgY29lZmZpY2llbnQgb2Ygaiwgd2hpY2ggaXMgYi4gSGVyZSBhID0gNyBhbmQgYiA9IC0zLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IkltKHopIGlzIHRoZSBudW1iZXIgbXVsdGlwbHlpbmcgaiwgbm90IHRoZSBmdWxsIHRlcm0gd2l0aCBqIGF0dGFjaGVkLiIsIkMiOiJUaGlzIHN3YXBzIHRoZSByZWFsIGFuZCBpbWFnaW5hcnkgcGFydHMuIiwiRCI6IlRoZSByZWFsIHBhcnQgaXMgYSByZWFsIG51bWJlciwgbm90IGEgdGVybSBjb250YWluaW5nIGouIn0sImhpbnQiOiJSZWFkIHogaW4gdGhlIGZvcm0gYSArIGpiIGFuZCBpZGVudGlmeSBhIGFuZCBiLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQSBzdHVkZW50IHNheXM6ICdUaGUgaW1hZ2luYXJ5IHBhcnQgb2YgNSArIDJqIGlzIDJqLicgRXhwbGFpbiBwcmVjaXNlbHkgd2hhdCBpcyB3cm9uZyB3aXRoIHRoYXQgc3RhdGVtZW50LiIsImlkZWFsX2Fuc3dlciI6IlRoZSBpbWFnaW5hcnkgcGFydCBpcyB0aGUgY29lZmZpY2llbnQgb2Ygaiwgc28gaXQgaXMgMi4gVGhlIHRlcm0gMmogaXMgdGhlIGltYWdpbmFyeSB0ZXJtIGluIHRoZSBleHByZXNzaW9uLCBidXQgSW0oNSArIDJqKSA9IDIuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBzdGF0ZSB0aGF0IHRoZSBpbWFnaW5hcnkgcGFydCBpcyAyIiwiTXVzdCBkaXN0aW5ndWlzaCBpbWFnaW5hcnkgcGFydCBmcm9tIHRoZSB0ZXJtIDJqIiwiTXVzdCBzaG93IHRoYXQgaiBpcyB0aGUgbWFya2VyIGF0dGFjaGVkIHRvIHRoZSBjb2VmZmljaWVudCJdLCJleHBsYW5hdGlvbiI6IlRoaXMgdGVzdHMgdGhlIG1vc3QgY29tbW9uIG5vdGF0aW9uIG1pc3Rha2UgaW4gZWFybHkgY29tcGxleCBudW1iZXJzLiIsImhpbnQiOiJTZXBhcmF0ZSB0aGUgY29lZmZpY2llbnQgZnJvbSB0aGUgc3ltYm9sIGouIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJjb21wbGV4X3BsYW5lX3JlYWRpbmciLCJsYWJlbCI6IlJlYWRpbmcgYSBjb21wbGV4IG51bWJlciBhcyBhIHBvaW50IG9uIHRoZSBjb21wbGV4IHBsYW5lIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHBvaW50IG9uIHRoZSBjb21wbGV4IHBsYW5lIHJlcHJlc2VudHMgeiA9IC0yICsgNWo/Iiwib3B0aW9ucyI6WyJBLiAoLTIsIDUpIiwiQi4gKDUsIC0yKSIsIkMuICgtMiwgLTUpIiwiRC4gKDIsIDUpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiQSBjb21wbGV4IG51bWJlciBhICsgamIgbWFwcyB0byB0aGUgcG9pbnQgKGEsIGIpLiBIZXJlIHRoZSByZWFsIGNvb3JkaW5hdGUgaXMgLTIgYW5kIHRoZSBpbWFnaW5hcnkgY29vcmRpbmF0ZSBpcyA1LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoaXMgcmV2ZXJzZXMgdGhlIGNvb3JkaW5hdGVzLiIsIkMiOiJUaGUgaW1hZ2luYXJ5IGNvb3JkaW5hdGUgc2hvdWxkIGJlIHBvc2l0aXZlIDUsIG5vdCBuZWdhdGl2ZSA1LiIsIkQiOiJUaGUgcmVhbCBjb29yZGluYXRlIHNob3VsZCBiZSBuZWdhdGl2ZSAyLCBub3QgcG9zaXRpdmUgMi4ifSwiaGludCI6IlVzZSAocmVhbCBwYXJ0LCBpbWFnaW5hcnkgcGFydCkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImNvbXBsZXhfcGxhbmVfcG9pbnQiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJwb2xhcl9yZWxhdGlvbnNoaXBzIiwibGFiZWwiOiJDb25uZWN0aW5nIHJlY3Rhbmd1bGFyIGNvb3JkaW5hdGVzIHRvIHBvbGFyIGNvb3JkaW5hdGVzIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiBhIHBvaW50IHogb24gdGhlIGNvbXBsZXggcGxhbmUgaGFzIHBvbGFyIGNvb3JkaW5hdGVzIChyLCB0aGV0YSksIHdoaWNoIHBhaXIgY29ycmVjdGx5IGdpdmVzIGl0cyByZWN0YW5ndWxhciBjb29yZGluYXRlcz8iLCJvcHRpb25zIjpbIkEuIGEgPSByIHNpbiB0aGV0YSwgYiA9IHIgY29zIHRoZXRhIiwiQi4gYSA9IHIgY29zIHRoZXRhLCBiID0gciBzaW4gdGhldGEiLCJDLiBhID0gY29zIHRoZXRhLCBiID0gc2luIHRoZXRhIiwiRC4gYSA9IHIgdGFuIHRoZXRhLCBiID0gciJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgaXMgYSA9IHIgY29zIHRoZXRhIGFuZCB0aGUgdmVydGljYWwgY29vcmRpbmF0ZSBpcyBiID0gciBzaW4gdGhldGEuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBzd2FwcyBjb3NpbmUgYW5kIHNpbmUuIiwiQyI6IlRoaXMgb21pdHMgdGhlIG1hZ25pdHVkZSByLiIsIkQiOiJUaGlzIGlzIG5vdCB0aGUgcmVjdGFuZ3VsYXItY29vcmRpbmF0ZSByZWxhdGlvbnNoaXAuIn0sImhpbnQiOiJUaGluayBvZiBvcmRpbmFyeSBwb2xhci10by1DYXJ0ZXNpYW4gY29udmVyc2lvbi4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDNfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIGV4cHJlc3Npb24gaXMgdGhlIGNvcnJlY3QgcG9sYXItZm9ybSByZXdyaXRlIG9mIHogPSBhICsgamI/Iiwib3B0aW9ucyI6WyJBLiB6ID0gcihjb3MgdGhldGEgLSBqIHNpbiB0aGV0YSkiLCJCLiB6ID0gcihzaW4gdGhldGEgKyBqIGNvcyB0aGV0YSkiLCJDLiB6ID0gcihjb3MgdGhldGEgKyBqIHNpbiB0aGV0YSkiLCJELiB6ID0gY29zIHRoZXRhICsgaiBzaW4gdGhldGEiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJVc2luZyBhID0gciBjb3MgdGhldGEgYW5kIGIgPSByIHNpbiB0aGV0YSBnaXZlcyB6ID0gYSArIGpiID0gcihjb3MgdGhldGEgKyBqIHNpbiB0aGV0YSkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIHNpZ24gaXMgd3JvbmcgZm9yIHRoZSBnZW5lcmFsIGZvcm0gc2hvd24gaW4gdGhlIHNlY3Rpb24uIiwiQiI6IlNpbmUgYW5kIGNvc2luZSBhcmUgc3dhcHBlZC4iLCJEIjoiVGhpcyB3b3VsZCBvbmx5IHJlcHJlc2VudCBhIHVuaXQtbWFnbml0dWRlIGNhc2Ugd2l0aCByID0gMS4ifSwiaGludCI6IlN1YnN0aXR1dGUgYSBhbmQgYiBpbnRvIGEgKyBqYiBjYXJlZnVsbHkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJldWxlcl9mb3JtdWxhIiwibGFiZWwiOiJFdWxlcidzIGZvcm11bGEgYW5kIGV4cG9uZW50aWFsIGZvcm0iLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A0X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJFdWxlcidzIGZvcm11bGEgbGV0cyB1cyByZXBsYWNlIGNvcyB0aGV0YSArIGogc2luIHRoZXRhIHdpdGggd2hpY2ggZXhwcmVzc2lvbj8iLCJvcHRpb25zIjpbIkEuIGVedGhldGEiLCJCLiBqZV50aGV0YSIsIkMuIGVeKGogdGhldGEpIiwiRC4gciBlXihqIHRoZXRhKSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IkV1bGVyJ3MgZm9ybXVsYSBzdGF0ZXMgZV4oaiB0aGV0YSkgPSBjb3MgdGhldGEgKyBqIHNpbiB0aGV0YS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIGlzIG1pc3NpbmcgaiBpbiB0aGUgZXhwb25lbnQuIiwiQiI6IlRoZSBqIGlzIGluY29ycmVjdGx5IHBsYWNlZCBvdXRzaWRlIHRoZSBleHBvbmVudGlhbC4iLCJEIjoiVGhpcyBpbmNsdWRlcyB0aGUgZXh0cmEgbWFnbml0dWRlIGZhY3RvciByLCBzbyBpdCByZXByZXNlbnRzIHogb25seSBhZnRlciBtdWx0aXBseWluZyBieSByLiJ9LCJoaW50IjoiTWF0Y2ggdGhlIHRleHRib29rIGZvcm11bGEgZXhhY3RseS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19XX0=" style="display:none;"></div>%%KC_END%%

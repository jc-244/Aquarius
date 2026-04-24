# B.1-2 Algebra of Complex Numbers

> **Objective:** Learn to switch cleanly between rectangular and polar descriptions of a complex number, and never confuse the coordinate components with the magnitude.

---

Take z = 3 + 4j. You can describe this number two ways: by saying it sits **3 units across and 4 units up** on the complex plane, or by saying it is **5 units from the origin at a certain angle**. Both descriptions point to the exact same location — they are just different algebraic languages for the same point.

This section is about moving fluently between those two languages. **Rectangular form** gives you the horizontal and vertical coordinates. **Polar form** gives you the distance and the angle. Exam problems frequently hide easy marks inside the distinction between a, b, r, and θ — especially the trap of mistaking the magnitude for the real part.

> **Formula Reference**
>
> Rectangular: z = a + jb
>
> Polar: z = r(cos θ + j sin θ)

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*This single figure shows the same complex number z = a + jb in both coordinate language — the point (a, b) on the plane — and polar language — the magnitude r and angle θ from the origin — along with its conjugate z* = a − jb reflected symmetrically across the real axis.*

## 1. One Point, Two Descriptions

Consider z = 3 + 4j. Let's read off every quantity carefully:

- **Real part:** Re(z) = 3
- **Imaginary part:** Im(z) = 4
- **Point on the plane:** (3, 4)
- **Magnitude:** r ≠ 3 and r ≠ 4

That last line is the one students most often get wrong.

**Rectangular form** answers the question: *how far across, and how far up?* It gives you two separate components — the horizontal displacement a and the vertical displacement b.

**Polar form** answers a different question: *how long is the arrow from the origin, and at what angle does it point?* It gives you a single distance r and a single angle θ.

### CRITICAL WARNING

**a is the horizontal coordinate; r is the distance from the origin.** These are not the same quantity. Confusing them is the single most common error in this topic.

> **Formula Reference**
>
> Re(z) = a, Im(z) = b, and in general a ≠ r

$$a = r\cos\theta, \quad b = r\sin\theta, \quad z = a + jb = r(\cos\theta + j\sin\theta)$$
*These equations are the bridge between Cartesian coordinates and polar coordinates for the same point. To read them geometrically: the horizontal coordinate a comes from projecting the full length r onto the real axis (hence the cosine), and the vertical coordinate b comes from projecting r onto the imaginary axis (hence the sine). The combined expression z = r(cos θ + j sin θ) simply packages both projections into one compact polar description.*

## 2. From Coordinates to Magnitude and Angle

Let's derive the polar description of z = 3 + 4j step by step.

**Step 1 — Read the coordinates:**

a = 3, b = 4

**Step 2 — Compute the magnitude:**

The magnitude r is the straight-line distance from the origin to the point (3, 4). By the Pythagorean theorem:

r = sqrt(a² + b²) = sqrt(3² + 4²) = sqrt(9 + 16) = sqrt(25) = **5**

**Step 3 — Find the angle:**

The angle θ satisfies a = r cos θ and b = r sin θ, so:

cos θ = a/r = 3/5, sin θ = b/r = 4/5

**Step 4 — Write the polar form:**

z = 5(cos θ + j sin θ), where θ = arctan(4/3)

---

### COMMON MISTAKE

**Practice check:** What if someone claimed r = 3 for z = 3 + 4j?

That would mean the distance from the origin to (3, 4) is only 3 — but 3 is just the horizontal leg of the right triangle. The hypotenuse (the actual distance) is always longer than either leg alone, unless the other leg is zero. Here the hypotenuse is 5, not 3. Claiming r = 3 confuses a coordinate component with the full length.

> **Formula Reference**
>
> r = sqrt(a² + b²), a = r cos θ, b = r sin θ

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula is simply a compact shorthand: wherever you see cos θ + j sin θ, you can replace it with e^{jθ}. This means the polar form z = r(cos θ + j sin θ) can be written more concisely as z = re^{jθ} — a notation you will encounter constantly in later sections.*

Think of navigating a city laid out on a perfect grid. **Rectangular form** is like giving someone street-by-street directions: "Walk 3 blocks east, then 4 blocks north." You specify two separate components, and the listener builds up the route step by step.

**Polar form** is like using a compass bearing instead: "Walk exactly 5 blocks in the direction of angle θ." You specify a single distance and a single direction, and the listener heads straight there.

Both sets of instructions deliver you to the same destination. The rectangular description emphasizes the individual components of the journey; the polar description emphasizes the total distance and the overall direction. Neither is more correct — they are just two languages for the same location on the map.

---
**📌 Key Takeaways**
- Every complex number has both a rectangular form (a, b) and a polar form (r, θ) describing the same point.
- r is the distance from the origin — not the real part a; confusing them is the most common error.
- Euler's formula e^{jθ} = cos θ + j sin θ gives a compact shorthand for the polar form z = re^{jθ}.

*In the next section we will use these forms to simplify more complex operations.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzIiwibGFiZWwiOiJJZGVudGlmeSByZWFsIHBhcnQsIGltYWdpbmFyeSBwYXJ0LCBhbmQgcG9pbnQgY29vcmRpbmF0ZXMiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciB6ID0gMiAtIDVqLCB3aGljaCBzdGF0ZW1lbnQgaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIFJlKHopID0gMiBhbmQgSW0oeikgPSAtNSIsIkIuIFJlKHopID0gMiBhbmQgSW0oeikgPSAtNWoiLCJDLiBSZSh6KSA9IC01IGFuZCBJbSh6KSA9IDIiLCJELiBUaGUgcG9pbnQgaXMgKC01LCAyKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkluIHogPSBhICsgamIsIHRoZSByZWFsIHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50LWZyZWUgaG9yaXpvbnRhbCB2YWx1ZSBhLCBhbmQgdGhlIGltYWdpbmFyeSBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudCBvZiBqLCBuYW1lbHkgYi4gSGVyZSBhID0gMiBhbmQgYiA9IC01LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6Ii01aiBpcyB0aGUgaW1hZ2luYXJ5IHRlcm0sIG5vdCB0aGUgaW1hZ2luYXJ5IHBhcnQgdmFsdWUuIiwiQyI6IlRoaXMgc3dhcHMgdGhlIHJlYWwgYW5kIGltYWdpbmFyeSBjb21wb25lbnRzLiIsIkQiOiJUaGUgY29ycmVzcG9uZGluZyBwb2ludCBpcyAoMiwgLTUpLCBub3QgKC01LCAyKS4ifSwiaGludCI6IlJlYWQgeiA9IGEgKyBqYiBhbmQgbWF0Y2ggYSBmaXJzdCwgdGhlbiB0aGUgY29lZmZpY2llbnQgb2Ygai4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgcG9pbnQgaW4gdGhlIGNvbXBsZXggcGxhbmUgaGFzIGNvb3JkaW5hdGVzICg0LCAtMykuIFdoaWNoIGNvbXBsZXggbnVtYmVyIGRvZXMgaXQgcmVwcmVzZW50PyIsIm9wdGlvbnMiOlsiQS4gLTMgKyA0aiIsIkIuIDQgLSAzaiIsIkMuIDQgKyAzaiIsIkQuIC00ICsgM2oiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJDb29yZGluYXRlcyAoYSwgYikgbWFwIHRvIHogPSBhICsgamIuIFNvICg0LCAtMykgY29ycmVzcG9uZHMgdG8gNCAtIDNqLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgcmV2ZXJzZXMgdGhlIGNvb3JkaW5hdGVzLiIsIkMiOiJUaGUgaW1hZ2luYXJ5IHBhcnQgc2hvdWxkIGJlIC0zLCBub3QgKzMuIiwiRCI6IkJvdGggc2lnbnMgYXJlIGluY29ycmVjdC4ifSwiaGludCI6IkZpcnN0IGNvb3JkaW5hdGUgaXMgdGhlIHJlYWwgcGFydDsgc2Vjb25kIGlzIHRoZSBjb2VmZmljaWVudCBvZiBqLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJjb21wbGV4X3BsYW5lX3BvaW50Iiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJtYWduaXR1ZGVfdnNfY29vcmRpbmF0ZSIsImxhYmVsIjoiRGlzdGluZ3Vpc2ggbWFnbml0dWRlIHIgZnJvbSB0aGUgcmVhbCBwYXJ0IGEiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciB6ID0gMyArIDRqLCB3aGF0IGlzIHRoZSBtYWduaXR1ZGUgcj8iLCJvcHRpb25zIjpbIkEuIDMiLCJCLiA0IiwiQy4gNSIsIkQuIDciXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJUaGUgbWFnbml0dWRlIGlzIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW46IHIgPSBzcXJ0KDPCsiArIDTCsikgPSBzcXJ0KDkgKyAxNikgPSBzcXJ0KDI1KSA9IDUuIEl0IGlzIG5vdCB0aGUgcmVhbCBwYXJ0IGFuZCBub3QgdGhlIGltYWdpbmFyeSBwYXJ0LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IjMgaXMgdGhlIHJlYWwgcGFydCBhLCBub3QgdGhlIG1hZ25pdHVkZS4iLCJCIjoiNCBpcyB0aGUgaW1hZ2luYXJ5IHBhcnQgYiwgbm90IHRoZSBtYWduaXR1ZGUuIiwiRCI6IjcgaXMgdGhlIHN1bSBvZiBjb21wb25lbnRzLCBub3QgdGhlIGRpc3RhbmNlLiJ9LCJoaW50IjoiVXNlIHRoZSBkaXN0YW5jZSBmb3JtdWxhLCBub3QgY29tcG9uZW50IHJlYWRpbmcuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InJpZ2h0X3RyaWFuZ2xlX29uX2NvbXBsZXhfcGxhbmUiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkEgc3R1ZGVudCBzYXlzOiAnRm9yIHogPSA2ICsgOGosIHRoZSBtYWduaXR1ZGUgaXMgNiBiZWNhdXNlIDYgaXMgdGhlIGhvcml6b250YWwgdmFsdWUuJyBFeHBsYWluIHByZWNpc2VseSB3aHkgdGhpcyBpcyB3cm9uZy4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgdmFsdWUgNiBpcyB0aGUgcmVhbCBwYXJ0IGEsIHdoaWNoIGlzIG9ubHkgdGhlIGhvcml6b250YWwgY29vcmRpbmF0ZS4gVGhlIG1hZ25pdHVkZSByIGlzIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4sIHNvIHIgPSBzcXJ0KDbCsiArIDjCsikgPSBzcXJ0KDM2ICsgNjQpID0gc3FydCgxMDApID0gMTAuIEluIGdlbmVyYWwsIGEgYW5kIHIgYXJlIGRpZmZlcmVudCB1bmxlc3MgdGhlIGltYWdpbmFyeSBwYXJ0IGlzIHplcm8uIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBzdGF0ZSB0aGF0IDYgaXMgdGhlIHJlYWwgcGFydCwgbm90IHRoZSBtYWduaXR1ZGUiLCJNdXN0IGRlZmluZSBtYWduaXR1ZGUgYXMgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIiwiTXVzdCBjb21wdXRlIG9yIGNvcnJlY3RseSBzdGF0ZSByID0gMTAiLCJNdXN0IG5vdGUgdGhhdCBhIGFuZCByIGFyZSBub3QgZ2VuZXJhbGx5IGVxdWFsIl0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3MgdGhlIHN0dWRlbnQncyBtb3N0IGNvbW1vbiBjb25mdXNpb24gaW4gdGhpcyBzZWN0aW9uOiBtaXhpbmcgYSBjb29yZGluYXRlIGNvbXBvbmVudCB3aXRoIG92ZXJhbGwgbGVuZ3RoLiIsImhpbnQiOiJBc2sgd2hldGhlciBhIGhvcml6b250YWwgbGVnIG9mIGEgdHJpYW5nbGUgZXF1YWxzIHRoZSBoeXBvdGVudXNlLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoicG9sYXJfcmVsYXRpb25zIiwibGFiZWwiOiJVc2UgdGhlIGNvb3JkaW5hdGUtcG9sYXIgcmVsYXRpb25zIGFuZCBFdWxlcidzIGZvcm11bGEiLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBleHByZXNzaW9uIGNvcnJlY3RseSByZXdyaXRlcyB6IGluIHBvbGFyLXRyaWdvbm9tZXRyaWMgZm9ybT8iLCJvcHRpb25zIjpbIkEuIHogPSByICsgas64IiwiQi4geiA9IHIoY29zIM64ICsgaiBzaW4gzrgpIiwiQy4geiA9IGEoY29zIM64ICsgaiBzaW4gzrgpIiwiRC4geiA9IHIoc2luIM64ICsgaiBjb3MgzrgpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIHN0YW5kYXJkIHBvbGFyLXRyaWdvbm9tZXRyaWMgZm9ybSBpcyB6ID0gcihjb3MgzrggKyBqIHNpbiDOuCksIHdoZXJlIHIgaXMgbWFnbml0dWRlIGFuZCDOuCBpcyBhbmdsZS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJQb2xhciBmb3JtIGlzIG5vdCBidWlsdCBieSBzaW1wbHkgYWRkaW5nIG1hZ25pdHVkZSBhbmQgYW5nbGUuIiwiQyI6IlRoZSBtdWx0aXBsaWVyIG11c3QgYmUgciwgdGhlIG1hZ25pdHVkZSwgbm90IGEsIHRoZSByZWFsIGNvbXBvbmVudC4iLCJEIjoiVGhpcyBzd2FwcyBjb3NpbmUgYW5kIHNpbmUsIHNvIHRoZSBjb29yZGluYXRlIHByb2plY3Rpb25zIHdvdWxkIGJlIHdyb25nLiJ9LCJoaW50IjoiTWF0Y2ggdGhlIHJlYWwtYXhpcyBwcm9qZWN0aW9uIHdpdGggY29zaW5lIGFuZCB0aGUgaW1hZ2luYXJ5LWF4aXMgcHJvamVjdGlvbiB3aXRoIHNpbmUuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiVXNpbmcgRXVsZXIncyBmb3JtdWxhLCB3aGljaCBleHByZXNzaW9uIGlzIGVxdWl2YWxlbnQgdG8gY29zIM64ICsgaiBzaW4gzrg/Iiwib3B0aW9ucyI6WyJBLiBlXs64IiwiQi4gamVezrgiLCJDLiBlXntqzrh9IiwiRC4gZV57LWrOuH0iXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJFdWxlcidzIGZvcm11bGEgc3RhdGVzIGRpcmVjdGx5IHRoYXQgZV57as64fSA9IGNvcyDOuCArIGogc2luIM64LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgaXMgYSByZWFsIGV4cG9uZW50aWFsIGFuZCBkb2VzIG5vdCByZXByZXNlbnQgdGhlIHRyaWdvbm9tZXRyaWMgcGFpci4iLCJCIjoiTXVsdGlwbHlpbmcgYnkgaiBjaGFuZ2VzIHRoZSBleHByZXNzaW9uLiIsIkQiOiJlXnstas64fSBlcXVhbHMgY29zIM64IC0gaiBzaW4gzrgsIHdoaWNoIGNoYW5nZXMgdGhlIHNpZ24gb2YgdGhlIGltYWdpbmFyeSBwYXJ0LiJ9LCJoaW50IjoiUmVjYWxsIHRoZSBleGFjdCBzdGF0ZW1lbnQgb2YgRXVsZXIncyBmb3JtdWxhLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%

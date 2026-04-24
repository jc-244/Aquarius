# B.1-2 Algebra of Complex Numbers

> **Section Objective:** Learn to read the same complex number in two equivalent forms — rectangular and polar — and understand exactly what each symbol means.

---

Start with a concrete example: **z = 3 + 4j**.

You already know this point lives on the complex plane. What this section adds is precision: that single point can be described in two completely different ways, and each way uses different symbols that mean different things.

- **Rectangular form** uses coordinates: a = 3 (horizontal) and b = 4 (vertical).
- **Polar form** uses distance and direction: r = 5 (distance from the origin) and θ (the angle).

These are not two different points — they are two descriptions of the same point.

### WHY THIS MATTERS FOR THE EXAM

The most common exam mistake is confusing **a** (the horizontal coordinate) with **r** (the straight-line distance from the origin). For z = 3 + 4j, a = 3 but r = 5. They are not the same. This section will make that distinction completely clear.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*This figure is the visual anchor for the entire section: a single point z is shown simultaneously in rectangular coordinates (a, b), in polar coordinates (r, θ), and with its complex conjugate z* = a − jb reflected symmetrically across the real axis.*

## 1. Rectangular Form and What Each Symbol Means

Take the example **z = 3 + 4j**. In rectangular form, the number is written as z = a + jb, where:

- **a = 3** is the **real part**, written Re(z) = 3. It is the horizontal coordinate — how far right the point sits.
- **b = 4** is the **imaginary part**, written Im(z) = 4. It is the vertical coordinate — how far up the point sits.

So the point z = 3 + 4j corresponds exactly to the coordinate pair **(3, 4)** on the complex plane.

### COMMON MISTAKE

Students often say "the imaginary part is 4j." This is **incorrect**. The imaginary part is the real number **4** — the coefficient in front of j. The expression **4j** is called the *imaginary term*, which is different. The imaginary part itself never carries the symbol j.

#### Quick Check

If the point is (2, −5), then z = **2 − 5j**, Re(z) = 2, and Im(z) = −5.

$$z = a + jb, \qquad \mathrm{Re}\,z = a, \qquad \mathrm{Im}\,z = b$$
*Rectangular form records the horizontal and vertical coordinates of the point directly, so the real part is the coefficient a and the imaginary part is the coefficient b — neither of which includes the symbol j.*

## 2. Polar Form: Magnitude and Angle

Now look at the same point **z = 3 + 4j** from a different angle — literally.

In Fig. B.2, the point (3, 4) is connected to the origin by a straight line. That line forms a right triangle with legs of length 3 (horizontal) and 4 (vertical). By the Pythagorean theorem:

$$r = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

So **r = 5** is the straight-line distance from the origin to the point. This is called the **magnitude** (or modulus) of z.

### CRITICAL DISTINCTION

**a = 3** is the horizontal coordinate. **r = 5** is the full distance from the origin. These are not the same number, and they measure different things. Do not substitute one for the other.

The angle **θ** is measured from the positive real axis to the line of length r:

$$\tan\theta = \frac{b}{a} = \frac{4}{3}$$

Once you know r and θ, you can recover the original coordinates:

- Horizontal: a = r cosθ
- Vertical: b = r sinθ

This is how polar form and rectangular form stay connected.

$$a = r\cos\theta, \qquad b = r\sin\theta, \qquad z = r(\cos\theta + j\sin\theta)$$
*Polar form describes the same point using its distance r from the origin and its direction θ, then reconstructs the rectangular coordinates a and b from those two pieces via cosine and sine.*

## A Hiking Map Analogy

Imagine you are reading a hiking map to find a campsite.

**Rectangular form** gives you turn-by-turn directions: "Walk **a** units east (or west) and **b** units north (or south)." You move along two separate axes to reach the destination.

**Polar form** gives you a compass bearing: "Walk **r** units from base camp in direction **θ**." You travel in one straight line at a fixed angle.

Both sets of instructions lead to **exactly the same campsite** — the destination does not change, only the description does.

#### Important Warning

The east-west distance **a** is only one component of your journey. The full straight-line distance from base camp is **r**, which accounts for both the east-west and north-south legs together. Confusing a with r is like saying the straight-line distance to the campsite equals only how far east you walked — that ignores the northward leg entirely.

$$e^{j\theta} = \cos\theta + j\sin\theta$$
*Euler's formula compresses the cosine-sine pair into a single exponential, which means the polar form z = r(cosθ + j sinθ) can be written more compactly as z = re^{jθ} — a shorthand you will use extensively in later calculations.*

---
**📌 Key Takeaways**
- Rectangular form z = a + jb: a is the horizontal coordinate, b is the vertical coordinate — neither includes j.
- Polar form uses r (distance from origin) and θ (angle); r is not the same as the coordinate a.
- Rectangular and polar forms are two equivalent descriptions of the same point on the complex plane.

*In the next section we will use these forms to simplify more complex calculations.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX2ludGVycHJldGF0aW9uIiwibGFiZWwiOiJJbnRlcnByZXRpbmcgcmVjdGFuZ3VsYXIgZm9ybSBhbmQgcmVhZGluZyByZWFsL2ltYWdpbmFyeSBwYXJ0cyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSAyIC0gNWosIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gUmUoeikgPSAyIGFuZCBJbSh6KSA9IC01IiwiQi4gUmUoeikgPSAyIGFuZCBJbSh6KSA9IC01aiIsIkMuIFJlKHopID0gLTUgYW5kIEltKHopID0gMiIsIkQuIFJlKHopID0gMmogYW5kIEltKHopID0gLTUiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJJbiB6ID0gYSArIGpiLCB0aGUgcmVhbCBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudCBvZiAxLCBhbmQgdGhlIGltYWdpbmFyeSBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudCBvZiBqLiBTbyBSZSh6KSA9IDIgYW5kIEltKHopID0gLTUuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhpcyBjb25mdXNlcyB0aGUgaW1hZ2luYXJ5IHBhcnQgd2l0aCB0aGUgZnVsbCBpbWFnaW5hcnkgdGVybS4gVGhlIGltYWdpbmFyeSBwYXJ0IGlzIHRoZSByZWFsIG51bWJlciAtNSwgbm90IC01ai4iLCJDIjoiVGhpcyBzd2FwcyB0aGUgcmVhbCBhbmQgaW1hZ2luYXJ5IGNvbXBvbmVudHMuIiwiRCI6IlRoZSByZWFsIHBhcnQgY2Fubm90IGluY2x1ZGUgajsgMmogaXMgbm90IHRoZSByZWFsIHBhcnQuIn0sImhpbnQiOiJSZWFkIHRoZSBjb2VmZmljaWVudCBvZiBqIHNlcGFyYXRlbHkgZnJvbSB0aGUgc3ltYm9sIGogaXRzZWxmLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBwb2ludCBpbiB0aGUgY29tcGxleCBwbGFuZSBoYXMgY29vcmRpbmF0ZXMgKDQsIC0zKS4gV2hpY2ggY29tcGxleCBudW1iZXIgZG9lcyBpdCByZXByZXNlbnQ/Iiwib3B0aW9ucyI6WyJBLiA0ICsgM2oiLCJCLiAtMyArIDRqIiwiQy4gNCAtIDNqIiwiRC4gLTQgKyAzaiJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgZ2l2ZXMgdGhlIHJlYWwgcGFydCBhbmQgdGhlIHZlcnRpY2FsIGNvb3JkaW5hdGUgZ2l2ZXMgdGhlIGltYWdpbmFyeSBwYXJ0LiBTbyAoNCwgLTMpIGNvcnJlc3BvbmRzIHRvIDQgLSAzai4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgc2lnbiBvZiB0aGUgaW1hZ2luYXJ5IGNvb3JkaW5hdGUgaXMgd3JvbmcuIiwiQiI6IlRoaXMgc3dhcHMgdGhlIGNvb3JkaW5hdGVzLiIsIkQiOiJCb3RoIHNpZ25zIGFyZSBpbmNvcnJlY3QuIn0sImhpbnQiOiJNYXAgKHgsIHkpIHRvIHggKyBqeS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoicHl0aG9uX21hdHBsb3RsaWIgY29tcGxleCBwbGFuZSBwb2ludCIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoicG9sYXJfbWVhbmluZ19hbmRfY29udmVyc2lvbiIsImxhYmVsIjoiTWVhbmluZyBvZiByIGFuZCDOuCwgYW5kIGNvbnZlcnRpbmcgcmVjdGFuZ3VsYXIgZGF0YSB0byBwb2xhciBkYXRhIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgeiA9IDMgKyA0aiwgd2hhdCBpcyB0aGUgbWFnbml0dWRlIHI/Iiwib3B0aW9ucyI6WyJBLiAzIiwiQi4gNCIsIkMuIDUiLCJELiA3Il0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiVGhlIG1hZ25pdHVkZSBpcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luOiByID0gc3FydCgzXjIgKyA0XjIpID0gc3FydCg5ICsgMTYpID0gc3FydCgyNSkgPSA1LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IjMgaXMgdGhlIHJlYWwgcGFydCBhLCBub3QgdGhlIG1hZ25pdHVkZS4iLCJCIjoiNCBpcyB0aGUgaW1hZ2luYXJ5IHBhcnQgYiwgbm90IHRoZSBtYWduaXR1ZGUuIiwiRCI6IjcgaXMgdGhlIHN1bSBvZiB0aGUgY29vcmRpbmF0ZXMsIG5vdCB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luLiJ9LCJoaW50IjoiVXNlIHRoZSBQeXRoYWdvcmVhbiB0aGVvcmVtLCBub3Qgc2ltcGxlIGFkZGl0aW9uLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggc3RhdGVtZW50IGJlc3QgZXhwbGFpbnMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGFuZCByIGZvciB6ID0gYSArIGpiPyIsIm9wdGlvbnMiOlsiQS4gYSBhbmQgciBhcmUgYWx3YXlzIGVxdWFsIGJlY2F1c2UgYm90aCBhcmUgbGVuZ3RocyIsIkIuIGEgaXMgdGhlIGhvcml6b250YWwgY29vcmRpbmF0ZSwgd2hpbGUgciBpcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIiwiQy4gYSBpcyB0aGUgYW5nbGUsIHdoaWxlIHIgaXMgdGhlIHZlcnRpY2FsIGNvb3JkaW5hdGUiLCJELiBhIGlzIHRoZSBpbWFnaW5hcnkgcGFydCwgd2hpbGUgciBpcyB0aGUgcmVhbCBwYXJ0Il0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIHZhbHVlIGEgdGVsbHMgaG93IGZhciBsZWZ0LXJpZ2h0IHRoZSBwb2ludCBpcywgd2hpbGUgciBtZWFzdXJlcyB0aGUgZnVsbCBzdHJhaWdodC1saW5lIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiB0byB0aGUgcG9pbnQuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhleSBhcmUgb25seSBlcXVhbCBpbiBzcGVjaWFsIGNhc2VzLCBub3QgaW4gZ2VuZXJhbC4iLCJDIjoiVGhpcyBtaXNsYWJlbHMgYm90aCBxdWFudGl0aWVzLiIsIkQiOiJhIGlzIHRoZSByZWFsIHBhcnQsIGFuZCByIGlzIG5vdCBhIHBhcnQ7IGl0IGlzIHRoZSBtYWduaXR1ZGUuIn0sImhpbnQiOiJUaGluayBjb29yZGluYXRlIHZlcnN1cyBkaXN0YW5jZS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTMiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIGEgPSByIGNvc864IGFuZCBiID0gciBzaW7OuCwgd2hpY2ggcG9sYXItZm9ybSBleHByZXNzaW9uIG1hdGNoZXMgeiA9IGEgKyBqYj8iLCJvcHRpb25zIjpbIkEuIHogPSByKGNvc864IC0gaiBzaW7OuCkiLCJCLiB6ID0gYShjb3POuCArIGogc2luzrgpIiwiQy4geiA9IHIoY29zzrggKyBqIHNpbs64KSIsIkQuIHogPSByICsgas64Il0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiU3Vic3RpdHV0aW5nIGEgPSByIGNvc864IGFuZCBiID0gciBzaW7OuCBpbnRvIHogPSBhICsgamIgZ2l2ZXMgeiA9IHIgY29zzrggKyBqKHIgc2luzrgpID0gcihjb3POuCArIGogc2luzrgpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBtaW51cyBzaWduIHdvdWxkIGNvcnJlc3BvbmQgdG8gYSByZWZsZWN0ZWQgcG9pbnQsIG5vdCB0aGUgb3JpZ2luYWwgei4iLCJCIjoiVGhlIHNjYWxpbmcgZmFjdG9yIHNob3VsZCBiZSByLCBub3QgYS4iLCJEIjoiVGhpcyBpcyBub3QgdGhlIGNvcnJlY3QgbWVhbmluZyBvZiBwb2xhciBmb3JtOyByIGFuZCDOuCBhcmUgbm90IGFkZGVkIGRpcmVjdGx5LiJ9LCJoaW50IjoiUmVwbGFjZSBhIGFuZCBiIGRpcmVjdGx5IGluIHogPSBhICsgamIgdXNpbmcgdGhlIGdpdmVuIHN1YnN0aXR1dGlvbnMuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoiZXVsZXJfZm9ybXVsYV9jb25uZWN0aW9uIiwibGFiZWwiOiJDb25uZWN0aW5nIHBvbGFyIGZvcm0gdG8gRXVsZXIncyBmb3JtdWxhIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiVXNpbmcgRXVsZXIncyBmb3JtdWxhLCByZXdyaXRlIHIoY29zzrggKyBqIHNpbs64KSBpbiBhIG1vcmUgY29tcGFjdCBmb3JtLiIsImlkZWFsX2Fuc3dlciI6IlVzaW5nIGVee2rOuH0gPSBjb3POuCArIGogc2luzrgsIHdlIHN1YnN0aXR1dGUgZGlyZWN0bHkgdG8gZ2V0IHogPSByKGNvc864ICsgaiBzaW7OuCkgPSByZV57as64fS4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IHN0YXRlIEV1bGVyJ3MgZm9ybXVsYSBvciBhcHBseSBpdCBjb3JyZWN0bHkiLCJNdXN0IGdpdmUgdGhlIGZpbmFsIGNvbXBhY3QgZm9ybSByZV57as64fSIsIk1pbm9yIG5vdGF0aW9uIHZhcmlhdGlvbnMgYXJlIGFjY2VwdGFibGUgaWYgbWF0aGVtYXRpY2FsbHkgY29ycmVjdCJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQgY2FuIGNvbm5lY3QgdGhlIHRyaWdvbm9tZXRyaWMgcG9sYXIgZm9ybSB0byB0aGUgZXhwb25lbnRpYWwgc2hvcnRoYW5kIHVzZWQgbGF0ZXIgaW4gZW5naW5lZXJpbmcgbWF0aC4iLCJoaW50IjoiUmVwbGFjZSB0aGUgYnJhY2tldGVkIGNvc2luZS1zaW5lIGV4cHJlc3Npb24gd2l0aCBhIHNpbmdsZSBleHBvbmVudGlhbCB1c2luZyBFdWxlcidzIGZvcm11bGEuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%

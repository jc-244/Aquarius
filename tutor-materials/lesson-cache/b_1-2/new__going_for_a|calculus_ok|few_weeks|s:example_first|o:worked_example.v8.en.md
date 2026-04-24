# B.1-2 Algebra of Complex Numbers

> **Objective:** Connect rectangular form, polar form, and exponential form of a complex number — and know exactly when to use each.

Consider z = 3 + 4j. You can describe this number in two completely equivalent ways: by its horizontal and vertical components (3 steps right, 4 steps up), or by its length from the origin and its direction angle (length 5, angle arctan(4/3)). Both descriptions point to the exact same location in the complex plane.

This section builds the algebraic bridge between those two descriptions and adds a third — exponential form — using Euler's formula.

### WHY THIS MATTERS FOR THE EXAM

Exam questions frequently ask you to convert between forms or to extract a specific quantity such as Re(z), Im(z), or |z|. The most common error is confusing the real part **a** with the magnitude **r**. They are not the same thing, and this section will make that distinction precise.

![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*This single diagram encodes everything: the point z = a + jb sits at Cartesian coordinates (a, b), the hypotenuse from the origin has length r, the angle at the origin is θ — and the conjugate z* = a − jb is simply the mirror image reflected across the real axis.*

## 1. One Number, Two Coordinate Systems

Rectangular form describes a complex number by its **horizontal component** (real part) and **vertical component** (imaginary part). Polar form describes the same number by its **distance from the origin** (magnitude) and its **direction angle** measured from the positive real axis.

Returning to the concrete example z = 3 + 4j:

| Quantity | Symbol | Value |
|----------|--------|-------|
| Real part | a | 3 |
| Imaginary part | b | 4 |
| Magnitude | r | 5 |
| Angle | θ | arctan(4/3) |

Here r = sqrt(3² + 4²) = sqrt(9 + 16) = sqrt(25) = **5**.

### COMMON MISTAKE

Students often write r = a = 3. This is wrong. The value **a = 3** is only the x-coordinate — it tells you how far right the point sits. The value **r = 5** is the full distance from the origin, computed from **both** a and b using the Pythagorean theorem. They are equal only in the special case b = 0 (a point on the positive real axis).

#### Rule

r = sqrt(a² + b²), not r = a.

$$z = a + jb, \qquad \operatorname{Re}(z)=a, \qquad \operatorname{Im}(z)=b$$
*Rectangular form records the two Cartesian coordinates of z: the real coordinate a (horizontal position) and the imaginary-coordinate value b (vertical position), both of which are ordinary real numbers.*

## 2. Deriving Polar Form Step by Step

Look at the right triangle formed in the complex plane: the horizontal side has length a, the vertical side has length b, and the hypotenuse has length r. The angle at the origin is θ.

From basic trigonometry:

- **Cosine of θ:** a/r = cos(θ), so **a = r cos(θ)**
- **Sine of θ:** b/r = sin(θ), so **b = r sin(θ)**

Now substitute both into z = a + jb:

z = r cos(θ) + j · r sin(θ) = **r(cos θ + j sin θ)**

That is the polar form.

---

### WORKED EXAMPLE

Let z = 1 + √3 j.

**Step 1 — Identify a and b:**
a = 1, b = √3

**Step 2 — Compute r:**
r = sqrt(1² + (√3)²) = sqrt(1 + 3) = sqrt(4) = **2**

**Step 3 — Compute θ:**
tan(θ) = b/a = √3/1 = √3, and since both a and b are positive the point is in quadrant I, so θ = **π/3**

**Step 4 — Write polar form:**
z = 2(cos(π/3) + j sin(π/3))

#### Note

Always confirm the quadrant before finalizing θ. The ratio b/a alone does not uniquely determine the angle.

$$a = r\cos\theta, \qquad b = r\sin\theta, \qquad z = r(\cos\theta + j\sin\theta)$$
*These equations convert the geometric data — length r and direction angle θ — back into the rectangular components a and b, allowing the same complex number to be written in either coordinate system.*

## 3. Exponential Form via Euler's Formula

Euler's formula states:

> e^{jθ} = cos θ + j sin θ

The bracketed expression in polar form is exactly the right-hand side of Euler's formula. Substituting directly:

z = r(cos θ + j sin θ) = r · e^{jθ}

That is the **exponential form**: z = r e^{jθ}.

**Example:** The number z = 2(cos(π/3) + j sin(π/3)) from the previous section becomes simply z = **2e^{jπ/3}**. Same number, more compact notation.

### EXAM WARNING

Exponential form hides the rectangular coordinates. If an exam question asks for Re(z) or Im(z) when z is given in exponential form, you must expand back:

Re(z) = r cos θ, Im(z) = r sin θ

Do not confuse the magnitude r with the real part Re(z). They are equal only when θ = 0.

$$e^{j\theta} = \cos\theta + j\sin\theta, \qquad z = r e^{j\theta}$$
*Exponential form is simply a compact shorthand for the polar form r(cos θ + j sin θ), made possible by substituting Euler's formula into the bracketed trigonometric expression.*

---
**📌 Key Takeaways**
- Real part a is a coordinate; magnitude r = sqrt(a² + b²) is a distance — they are not the same.
- Conversion chain: rectangular a + jb → polar r(cos θ + j sin θ) → exponential r e^{jθ}.
- To find Re(z) or Im(z) from exponential form, expand using r cos θ and r sin θ first.

*In the next section we will use these three forms to perform arithmetic on complex numbers — addition, multiplication, and division — and discover why multiplication in exponential form reduces to adding angles.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Rhbmd1bGFyX3BhcnRzX3ZzX21hZ25pdHVkZSIsImxhYmVsIjoiRGlzdGluZ3Vpc2hpbmcgcmVhbCBwYXJ0LCBpbWFnaW5hcnkgcGFydCwgYW5kIG1hZ25pdHVkZSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHogPSAzICsgNGosIHdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gUmUoeikgPSAzLCBJbSh6KSA9IDQsIGFuZCB8enwgPSA1IiwiQi4gUmUoeikgPSAzLCBJbSh6KSA9IDRqLCBhbmQgfHp8ID0gNCIsIkMuIFJlKHopID0gNSwgSW0oeikgPSA0LCBhbmQgfHp8ID0gMyIsIkQuIFJlKHopID0gM2osIEltKHopID0gNCwgYW5kIHx6fCA9IDciXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgcmVhbCBwYXJ0IGlzIHRoZSBjb2VmZmljaWVudCBvbiB0aGUgcmVhbCBheGlzLCAzLiBUaGUgaW1hZ2luYXJ5IHBhcnQgaXMgdGhlIGNvZWZmaWNpZW50IG9mIGosIHdoaWNoIGlzIDQuIFRoZSBtYWduaXR1ZGUgaXMgc3FydCgzwrIgKyA0wrIpID0gNS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJJbSh6KSBpcyB0aGUgY29lZmZpY2llbnQgNCwgbm90IHRoZSB0ZXJtIDRqLCBhbmQgdGhlIG1hZ25pdHVkZSBpcyBub3QgNC4iLCJDIjoiNSBpcyB0aGUgbWFnbml0dWRlLCBub3QgdGhlIHJlYWwgcGFydC4iLCJEIjoiVGhlIHJlYWwgcGFydCBpcyAzLCBub3QgM2osIGFuZCBtYWduaXR1ZGVzIGFyZSBub3QgZm91bmQgYnkgc2ltcGxlIGFkZGl0aW9uIGhlcmUuIn0sImhpbnQiOiJTZXBhcmF0ZSBjb29yZGluYXRlIHZhbHVlcyBmcm9tIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbi4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHN0YXRlbWVudCBiZXN0IGV4cGxhaW5zIHdoeSByIGFuZCBhIGFyZSB1c3VhbGx5IGRpZmZlcmVudCBmb3IgeiA9IGEgKyBqYj8iLCJvcHRpb25zIjpbIkEuIHIgYWx3YXlzIGVxdWFscyB0aGUgaW1hZ2luYXJ5IHBhcnQgYiIsIkIuIHIgaXMgdGhlIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiwgd2hpbGUgYSBpcyBvbmx5IHRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUiLCJDLiBhIGlzIGFuIGFuZ2xlLCB3aGlsZSByIGlzIGEgY29vcmRpbmF0ZSIsIkQuIHIgZXF1YWxzIGEgd2hlbmV2ZXIgYiBpcyBwb3NpdGl2ZSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSBxdWFudGl0eSBhIGdpdmVzIGhvcml6b250YWwgcG9zaXRpb24gb25seSwgYnV0IHIgbWVhc3VyZXMgdGhlIGZ1bGwgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIHVzaW5nIGJvdGggYSBhbmQgYi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJyIGlzIG5vdCB0aGUgaW1hZ2luYXJ5IHBhcnQ7IGl0IGRlcGVuZHMgb24gYm90aCBjb29yZGluYXRlcy4iLCJDIjoiYSBpcyBub3QgYW4gYW5nbGUuIiwiRCI6IlRoZSBzaWduIG9mIGIgZG9lcyBub3QgbWFrZSByIGVxdWFsIHRvIGEuIn0sImhpbnQiOiJBc2sgd2hpY2ggcXVhbnRpdHkgdXNlcyBib3RoIGxlZ3Mgb2YgdGhlIHJpZ2h0IHRyaWFuZ2xlLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoicmVjdGFuZ3VsYXJfdG9fcG9sYXJfZGVyaXZhdGlvbiIsImxhYmVsIjoiQ29udmVydGluZyByZWN0YW5ndWxhciBmb3JtIHRvIHBvbGFyIGZvcm0iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIHogPSAxICsg4oiaMyBqLCB3aGljaCBwb2xhciBmb3JtIGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiAyKGNvcyjPgC82KSArIGogc2luKM+ALzYpKSIsIkIuIDIoY29zKM+ALzMpICsgaiBzaW4oz4AvMykpIiwiQy4g4oiaMyhjb3Moz4AvMykgKyBqIHNpbijPgC8zKSkiLCJELiAyKGNvcygyz4AvMykgKyBqIHNpbigyz4AvMykpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIG1hZ25pdHVkZSBpcyByID0gc3FydCgxwrIgKyAo4oiaMynCsikgPSAyLCBhbmQgdGFuKM64KSA9IOKImjMvMSBnaXZlcyDOuCA9IM+ALzMgaW4gdGhlIGZpcnN0IHF1YWRyYW50LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6Is+ALzYgd291bGQgZ2l2ZSBjb29yZGluYXRlcyAo4oiaMywgMSksIG5vdCAoMSwg4oiaMykuIiwiQyI6IlRoZSBtYWduaXR1ZGUgaXMgMiwgbm90IOKImjMuIiwiRCI6IjLPgC8zIHBsYWNlcyB0aGUgcG9pbnQgaW4gcXVhZHJhbnQgSUksIGJ1dCBib3RoIGNvb3JkaW5hdGVzIGhlcmUgYXJlIHBvc2l0aXZlLiJ9LCJoaW50IjoiQ29tcHV0ZSByIGZpcnN0LCB0aGVuIGxvY2F0ZSB0aGUgY29ycmVjdCBxdWFkcmFudCBmb3IgzrguIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJDb252ZXJ0IHogPSAtMSArIGogaW50byBwb2xhciBmb3JtLCBzaG93aW5nIHRoZSBtYWduaXR1ZGUgYW5kIG9uZSBjb3JyZWN0IHByaW5jaXBhbCBhbmdsZS4iLCJpZGVhbF9hbnN3ZXIiOiJyID0gc3FydCgoLTEpwrIgKyAxwrIpID0gc3FydCgyKS4gU2luY2UgdGhlIHBvaW50ICgtMSwgMSkgaXMgaW4gcXVhZHJhbnQgSUksIGEgcHJpbmNpcGFsIGFuZ2xlIGlzIDPPgC80LiBUaGVyZWZvcmUgeiA9IHNxcnQoMikoY29zKDPPgC80KSArIGogc2luKDPPgC80KSkuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBjb21wdXRlIHIgPSBzcXJ0KDIpIiwiTXVzdCBpZGVudGlmeSBhIGNvcnJlY3QgcXVhZHJhbnQtSUkgYW5nbGUsIHByZWZlcmFibHkgM8+ALzQiLCJNdXN0IHByZXNlbnQgdGhlIGZpbmFsIHBvbGFyIGZvcm0gY29ycmVjdGx5Il0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3Mgd2hldGhlciB0aGUgc3R1ZGVudCBjYW4gY29tYmluZSBtYWduaXR1ZGUgY29tcHV0YXRpb24gd2l0aCBjb3JyZWN0IGFuZ2xlIHNlbGVjdGlvbiBpbnN0ZWFkIG9mIHVzaW5nIGFyY3RhbiBibGluZGx5LiIsImhpbnQiOiJEbyBub3QgZGVjaWRlIHRoZSBhbmdsZSBmcm9tIHRoZSByYXRpbyBhbG9uZTsgdXNlIHRoZSBxdWFkcmFudC4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoicHl0aG9uX21hdHBsb3RsaWIgY29tcGxleC1wbGFuZSBwb2ludCBpbiBxdWFkcmFudCBJSSIsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6ImV1bGVyX2V4cG9uZW50aWFsX2Zvcm0iLCJsYWJlbCI6IlVzaW5nIEV1bGVyJ3MgZm9ybXVsYSB0byB3cml0ZSBleHBvbmVudGlhbCBmb3JtIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiVXNpbmcgRXVsZXIncyBmb3JtdWxhLCB3aGljaCBleHBvbmVudGlhbCBmb3JtIG1hdGNoZXMgeiA9IDUoY29zIM64ICsgaiBzaW4gzrgpPyIsIm9wdGlvbnMiOlsiQS4gNWVee864fSIsIkIuIGVee2o1zrh9IiwiQy4gNWVee2rOuH0iLCJELiA1aiBlXnvOuH0iXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJFdWxlcidzIGZvcm11bGEgc2F5cyBjb3MozrgpICsgaiBzaW4ozrgpID0gZV57as64fSwgc28gbXVsdGlwbHlpbmcgYnkgNSBnaXZlcyB6ID0gNWVee2rOuH0uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIGV4cG9uZW50IG11c3QgYmUgas64LCBub3QgzrggYWxvbmUuIiwiQiI6IlRoaXMgY2hhbmdlcyB0aGUgYW5nbGUgYW5kIHJlbW92ZXMgdGhlIG1hZ25pdHVkZSBmYWN0b3IgZnJvbSBpdHMgcHJvcGVyIHJvbGUuIiwiRCI6IlRoZSBleHRyYSBqIGlzIG5vdCBwYXJ0IG9mIHRoZSBjb252ZXJzaW9uLiJ9LCJoaW50IjoiUmVwbGFjZSBvbmx5IHRoZSBicmFja2V0ZWQgdHJpZyBleHByZXNzaW9uIHVzaW5nIEV1bGVyJ3MgZm9ybXVsYS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3AzX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiB6ID0gMmVee2rPgC8zfSwgd2hhdCBpcyBSZSh6KT8iLCJvcHRpb25zIjpbIkEuIDIiLCJCLiAxIiwiQy4g4oiaMyIsIkQuIM+ALzMiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJFeHBhbmQgZmlyc3Q6IHogPSAyKGNvcyjPgC8zKSArIGogc2luKM+ALzMpKS4gU2luY2UgY29zKM+ALzMpID0gMS8yLCB0aGUgcmVhbCBwYXJ0IGlzIDIgw5cgKDEvMikgPSAxLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IjIgaXMgdGhlIG1hZ25pdHVkZSwgbm90IHRoZSByZWFsIHBhcnQuIiwiQyI6IuKImjMgaXMgcmVsYXRlZCB0byB0aGUgaW1hZ2luYXJ5IGNvbXBvbmVudCBoZXJlLCBub3QgdGhlIHJlYWwgcGFydC4iLCJEIjoiz4AvMyBpcyB0aGUgYW5nbGUsIG5vdCBhIGNvb3JkaW5hdGUuIn0sImhpbnQiOiJFeHBvbmVudGlhbCBmb3JtIGhpZGVzIGNvb3JkaW5hdGVzOyBleHBhbmQgaXQgYmFjayB0byBjb3NpbmUgYW5kIHNpbmUuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19XX0=" style="display:none;"></div>%%KC_END%%

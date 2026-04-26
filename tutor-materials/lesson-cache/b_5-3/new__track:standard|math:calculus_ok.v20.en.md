%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IlRoaXMgc2VjdGlvbiBpcyBmb3JtdWxhLWhlYXZ5IGFuZCBoYXMgbm8gZXh0cmFjdGVkIHRleHRib29rIGZpZ3VyZXMuIEEgY2xlYW4gZ2VuZXJhdGVkIHRlYWNoaW5nIHZpc3VhbCB3aWxsIG1ha2UgdGhlIHJlcGVhdGVkLWZhY3RvciBzdGFjayBhbmQgdGhlIGNvZWZmaWNpZW50LWZpbmRpbmcgd29ya2Zsb3cgbXVjaCBlYXNpZXIgdG8gc2VlIHRoYW4gZGVuc2UgT0NSIGVxdWF0aW9ucyBhbG9uZS4iLCJjcmFtIjoiVXNlIHRoZSB2aXN1YWwgdG8gaGVscCBzdHVkZW50cyBpbnN0YW50bHkgcmVjb2duaXplIHRoZSBkZW5vbWluYXRvciBwYXR0ZXJuIGFuZCBtYXRjaCBlYWNoIGNvZWZmaWNpZW50IHRvIHRoZSBjb3JyZWN0IHN0ZXA6IHBsdWcgaW4sIGRpZmZlcmVudGlhdGUgb25jZSwgZGlmZmVyZW50aWF0ZSB0d2ljZS4iLCJzdGFuZGFyZCI6IlVzZSB0aGUgdmlzdWFsIHRvIHNob3cgdGhlIGV4cGFuc2lvbiBzdHJ1Y3R1cmUgYW5kIG9uZSBjbGVhciB3b3JrZmxvdyBmb3IgZmluZGluZyBjb2VmZmljaWVudHMgaW4gdGhlIG1haW4gZXhhbXBsZS4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhlIHZpc3VhbCB0byBoaWdobGlnaHQgZXhhY3RseSB3aGljaCBjb2VmZmljaWVudCBjb21lcyBmcm9tIHdoaWNoIGRlcml2YXRpdmUgb3JkZXIgYW5kIHByZXZlbnQgbWl4LXVwcyBiZXR3ZWVuIHJlcGVhdGVkLWZhY3RvciB0ZXJtcyBhbmQgdW5yZXBlYXRlZC1mYWN0b3IgdGVybXMuIn0=" style="display:none;"></div>%%KC_END%%
# B.5-3 Repeated Factors of Q(x)

> **Section Objective:** Recognize the partial-fraction structure when a denominator contains a repeated linear factor, and apply the correct coefficient-finding method for each term in the resulting ladder.

When a denominator contains a repeated factor such as \((x+1)^3\), you cannot write just one fraction for it. You must include **every descending power**: \(\frac{A}{(x+1)^3} + \frac{B}{(x+1)^2} + \frac{C}{x+1}\). This is the single most common setup error on exams — students either drop one of the intermediate terms or try to apply ordinary cover-up to all of them.

Think of this section as a **fast recognition drill**: first spot the repeated-factor stack, then decide which coefficients come from direct substitution and which require derivatives. Master that two-step workflow and the rest is arithmetic.

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiVXNlIHRoaXMgdG8gbWVtb3JpemUgdGhlIHJlcGVhdGVkLWZhY3RvciBwYXR0ZXJuIGluIG9uZSBnbGFuY2UuIiwic3RhbmRhcmQiOiJVc2UgdGhpcyB0byBjb25uZWN0IHRoZSBkZW5vbWluYXRvciBzdHJ1Y3R1cmUgdG8gdGhlIGNvcnJlY3QgZXhwYW5zaW9uIGZvcm0gYW5kIGNvZWZmaWNpZW50IHN0ZXBzLiIsInRvcF9zY29yZSI6IlVzZSB0aGlzIHRvIGRpc3Rpbmd1aXNoIGRlcml2YXRpdmUgb3JkZXIgY2FyZWZ1bGx5IGFuZCBhdm9pZCBjb2VmZmljaWVudC1wbGFjZW1lbnQgZXJyb3JzLiJ9" style="display:none;"></div>%%KC_END%%
*🎨 One repeated factor of order r generates r descending partial-fraction terms. Unrepeated factors still use ordinary cover-up; repeated-factor coefficients require evaluation and successive derivatives after multiplying away the repeated denominator.*
![Illustration](/generated/gptimage2-1777215238509-6128.png)

## 1. Expansion Form for a Repeated Factor

Whenever \(F(x)\) has a factor \((x - \lambda)^r\) in the denominator, the partial-fraction expansion must contain a **ladder** of \(r\) terms:

$$
\frac{a_0}{(x-\lambda)^r} + \frac{a_1}{(x-\lambda)^{r-1}} + \cdots + \frac{a_{r-1}}{x-\lambda}
$$

Every power from \(r\) down to \(1\) must appear. Unrepeated factors \((x - \alpha_1), (x - \alpha_2), \ldots\) each contribute exactly one ordinary term, just as in the simple case.

### KEY INSIGHT

A repeated factor does **not** produce one fraction — it produces a ladder of fractions whose length equals the repeated power \(r\).

#### Exam Note

When writing your setup, count the power \(r\) first. Then verify that exactly \(r\) terms appear for that factor before you solve for any coefficient. A missing intermediate term will corrupt every coefficient you compute.

$$F(x)=\frac{P(x)}{(x-\lambda)^r(x-\alpha_1)(x-\alpha_2)\cdots(x-\alpha_j)}=\frac{a_0}{(x-\lambda)^r}+\frac{a_1}{(x-\lambda)^{r-1}}+\cdots+\frac{a_{r-1}}{x-\lambda}+\frac{k_1}{x-\alpha_1}+\cdots+\frac{k_j}{x-\alpha_j}$$
*A repeated linear factor of order \(r\) creates exactly \(r\) separate partial-fraction terms (one for each descending power), while each unrepeated factor \((x - \alpha_i)\) creates just one term.*

## 2. How to Find the Coefficients Fast

**Step 1 — Unrepeated factors first.** Coefficients \(k_1, k_2, \ldots\) on unrepeated factors are still found by the standard Heaviside cover-up method: multiply both sides by \((x - \alpha_i)\) and substitute \(x = \alpha_i\).

**Step 2 — Set up the repeated factor.** Multiply \(F(x)\) by \((x - \lambda)^r\) to clear the entire repeated denominator. Call this product \(G(x) = (x-\lambda)^r F(x)\).

**Step 3 — Extract each coefficient by differentiation.**
- Evaluate \(G(x)\) at \(x = \lambda\) to get \(a_0\).
- Differentiate \(G(x)\) once and evaluate at \(x = \lambda\) to get \(a_1\).
- In general: \(a_j = \frac{1}{j!} \frac{d^j}{dx^j} G(x) \big|_{x=\lambda}\).

Differentiation here is the ordinary rate-of-change operation from basic calculus — it is used as a **coefficient extractor**, peeling off one layer of the repeated-factor ladder with each application.

#### Exam Warning

Ordinary cover-up applied directly to the original \(F(x)\) does **not** give \(a_1, a_2,\) or higher repeated-factor coefficients. You must multiply by \((x-\lambda)^r\) first.

$$a_j=\left.\frac{1}{j!}\frac{d^j}{dx^j}\left[(x-\lambda)^rF(x)\right]\right|_{x=\lambda}$$
*After removing the repeated denominator factor by multiplication, the \(j\)-th derivative of the resulting expression, evaluated at \(x = \lambda\) and scaled by \(\frac{1}{j!}\), isolates exactly the coefficient \(a_j\) attached to the \((x-\lambda)^{r-j}\) term in the repeated-factor ladder.*

## 3. Representative Example

Consider **Example B.10**:

$$
F(x) = \frac{4x^3 + 16x^2 + 23x + 13}{(x+1)^3(x+2)}
$$

The setup is:

$$
F(x) = \frac{a_0}{(x+1)^3} + \frac{a_1}{(x+1)^2} + \frac{a_2}{x+1} + \frac{k}{x+2}
$$

**Finding \(k\)** (unrepeated factor, cover-up at \(x = -2\)):

$$
k = \left.\frac{4x^3+16x^2+23x+13}{(x+1)^3}\right|_{x=-2} = \frac{-32+64-46+13}{(-1)^3} = \frac{-1}{-1} = 1
$$

**Finding \(a_0\)** (multiply by \((x+1)^3\), evaluate at \(x=-1\)):

$$
a_0 = \left.(4x^3+16x^2+23x+13)\cdot\frac{1}{x+2}\right|_{x=-1} = \frac{-4+16-23+13}{1} = 2
$$

**Finding \(a_1\)** (one derivative of \(G(x)\), evaluate at \(x=-1\)): gives \(a_1 = 1\).

**Finding \(a_2\)** (second derivative of \(G(x)\) times \(\frac{1}{2!}\), evaluate at \(x=-1\)): gives \(a_2 = 3\).

The final expansion is written below. Quick check: the factor \((x+1)^3\) has power 3, so exactly **three** terms appear for it — confirm this before moving on.

$$\frac{4x^3+16x^2+23x+13}{(x+1)^3(x+2)}=\frac{2}{(x+1)^3}+\frac{1}{(x+1)^2}+\frac{3}{x+1}+\frac{1}{x+2}$$
*This final answer shows the complete repeated-factor ladder — three descending terms for \((x+1)^3\) with coefficients \(2, 1, 3\) — plus one ordinary term for the unrepeated factor \((x+2)\) with coefficient \(1\).*

---
**📌 Key Takeaways**
- A repeated factor \((x-\lambda)^r\) generates a ladder of exactly \(r\) partial-fraction terms, one per descending power.
- Unrepeated factors still use ordinary Heaviside cover-up — no derivatives needed.
- Repeated-factor coefficients are found by multiplying away the repeated denominator, then evaluating and differentiating at \(x = \lambda\).

*In the next section we will combine cover-up with clearing fractions when repeated roots make differentiation cumbersome.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlcGVhdGVkX2ZhY3Rvcl9zZXR1cCIsImxhYmVsIjoiU2V0IHVwIHRoZSBjb3JyZWN0IHBhcnRpYWwtZnJhY3Rpb24gZm9ybSBmb3IgYSByZXBlYXRlZCBmYWN0b3IiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIGlzIHRoZSBjb3JyZWN0IHBhcnRpYWwtZnJhY3Rpb24gc2V0dXAgZm9yIGEgZGVub21pbmF0b3IgY29udGFpbmluZyBcXCAoKHgtMSleMih4KzMpXFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwgKFxcZnJhY3tBfXsoeC0xKV4yfSArIFxcZnJhY3tCfXt4KzN9XFwpIiwiQi4gXFwgKFxcZnJhY3tBfXsoeC0xKV4yfSArIFxcZnJhY3tCfXt4LTF9ICsgXFxmcmFje0N9e3grM31cXCkiLCJDLiBcXCAoXFxmcmFje0F9e3gtMX0gKyBcXGZyYWN7Qn17eCszfVxcKSIsIkQuIFxcIChcXGZyYWN7QX17KHgtMSleM30gKyBcXGZyYWN7Qn17eCszfVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkEgcmVwZWF0ZWQgZmFjdG9yIG9mIG9yZGVyIDIgbXVzdCBwcm9kdWNlIHR3byB0ZXJtczogb25lIG92ZXIgXFwgKCh4LTEpXjJcXCkgYW5kIG9uZSBvdmVyIFxcICgoeC0xKVxcKSwgcGx1cyBvbmUgdGVybSBmb3IgdGhlIHVucmVwZWF0ZWQgZmFjdG9yIFxcICgoeCszKVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJJdCBpcyBtaXNzaW5nIHRoZSBcXCAoKHgtMSlcXCkgdGVybSwgc28gdGhlIHJlcGVhdGVkLWZhY3RvciBsYWRkZXIgaXMgaW5jb21wbGV0ZS4iLCJDIjoiSXQgb21pdHMgdGhlIGhpZ2hlc3QgcmVwZWF0ZWQtcG93ZXIgdGVybSBcXCAoXFxmcmFje0F9eyh4LTEpXjJ9XFwpIGFuZCBpcyBub3QgdGhlIGNvcnJlY3Qgc2V0dXAuIiwiRCI6IlRoZSByZXBlYXRlZCBmYWN0b3IgaXMgb3JkZXIgMiwgbm90IG9yZGVyIDMuIn0sImhpbnQiOiJGb3IgYSByZXBlYXRlZCBmYWN0b3Igb2YgcG93ZXIgXFwgKHJcXCksIHdyaXRlIFxcIChyXFwpIGRlc2NlbmRpbmcgdGVybXMuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImdlbmVyYXRlZF9pbWFnZSIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgYSBkZW5vbWluYXRvciBjb250YWlucyBcXCAoKHgrNCleM1xcKSwgaG93IG1hbnkgc2VwYXJhdGUgcGFydGlhbC1mcmFjdGlvbiB0ZXJtcyBhcmUgbmVlZGVkIGZvciB0aGF0IGZhY3RvciBhbG9uZT8iLCJvcHRpb25zIjpbIkEuIDEiLCJCLiAyIiwiQy4gMyIsIkQuIDQiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJBIHJlcGVhdGVkIGZhY3RvciBvZiBvcmRlciAzIGNyZWF0ZXMgdGhyZWUgdGVybXM6IG9uZSBvdmVyIFxcICgoeCs0KV4zXFwpLCBvbmUgb3ZlciBcXCAoKHgrNCleMlxcKSwgYW5kIG9uZSBvdmVyIFxcICgoeCs0KVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGF0IHdvdWxkIGJlIGNvcnJlY3Qgb25seSBmb3IgYW4gdW5yZXBlYXRlZCBsaW5lYXIgZmFjdG9yLiIsIkIiOiJBIGN1YmljIHJlcGVhdGVkIGZhY3RvciBuZWVkcyB0aHJlZSBkZXNjZW5kaW5nLXBvd2VyIHRlcm1zLCBub3QgdHdvLiIsIkQiOiJZb3UgZG8gbm90IGFkZCBhbiBleHRyYSB0ZXJtIGJleW9uZCB0aGUgZmFjdG9yIG9yZGVyLiJ9LCJoaW50IjoiTWF0Y2ggdGhlIG51bWJlciBvZiB0ZXJtcyB0byB0aGUgcmVwZWF0ZWQgcG93ZXIgXFwgKHJcXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJjb2VmZmljaWVudF9tZXRob2RzIiwibGFiZWwiOiJDaG9vc2UgdGhlIGNvcnJlY3QgbWV0aG9kIGZvciBlYWNoIGNvZWZmaWNpZW50IiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgYSByZXBlYXRlZCBmYWN0b3IgXFwgKCh4LVxcbGFtYmRhKV4zXFwpLCB3aGljaCBzdGVwIGdpdmVzIHRoZSBjb2VmZmljaWVudCBcXCAoYV8wXFwpIGFmdGVyIG11bHRpcGx5aW5nIFxcIChGKHgpXFwpIGJ5IFxcICgoeC1cXGxhbWJkYSleM1xcKT8iLCJvcHRpb25zIjpbIkEuIERpZmZlcmVudGlhdGUgdHdpY2UsIHRoZW4gc2V0IFxcICh4ID0gXFxsYW1iZGFcXCkiLCJCLiBTZXQgXFwgKHggPSBcXGxhbWJkYVxcKSBkaXJlY3RseSIsIkMuIFVzZSBjb3Zlci11cCBvbiB0aGUgb3JpZ2luYWwgXFwgKEYoeClcXCkgd2l0aG91dCBtdWx0aXBseWluZyIsIkQuIFNldCBcXCAoeCA9IDBcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJBZnRlciBtdWx0aXBseWluZyBieSB0aGUgcmVwZWF0ZWQgZmFjdG9yLCBldmFsdWF0aW5nIGF0IFxcICh4ID0gXFxsYW1iZGFcXCkgZ2l2ZXMgXFwgKGFfMFxcKSBiZWNhdXNlIGFsbCB0ZXJtcyBjb250YWluaW5nIFxcICgoeCAtIFxcbGFtYmRhKVxcKSB2YW5pc2guIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiRGlmZmVyZW50aWF0aW5nIHR3aWNlICh3aXRoIHRoZSBcXCAoXFxmcmFjezF9ezIhfVxcKSBmYWN0b3IpIGNvcnJlc3BvbmRzIHRvIFxcIChhXzJcXCksIG5vdCBcXCAoYV8wXFwpLiIsIkMiOiJPcmRpbmFyeSBjb3Zlci11cCBvbiB0aGUgb3JpZ2luYWwgZXhwcmVzc2lvbiBkb2VzIG5vdCBkaXJlY3RseSBpc29sYXRlIHJlcGVhdGVkLWZhY3RvciBjb2VmZmljaWVudHM7IHlvdSBtdXN0IG11bHRpcGx5IGJ5IFxcICgoeC1cXGxhbWJkYSleclxcKSBmaXJzdC4iLCJEIjoiVGhlIHNwZWNpYWwgZXZhbHVhdGlvbiBwb2ludCBpcyB0aGUgcmVwZWF0ZWQgcm9vdCBcXCAoeCA9IFxcbGFtYmRhXFwpLCBub3QgemVybyB1bmxlc3MgXFwgKFxcbGFtYmRhID0gMFxcKS4ifSwiaGludCI6IlRoaW5rIGFib3V0IHdoaWNoIHRlcm1zIHN1cnZpdmUgd2hlbiBcXCAoeCA9IFxcbGFtYmRhXFwpIGFmdGVyIHRoZSByZXBlYXRlZCBmYWN0b3IgaGFzIGJlZW4gbXVsdGlwbGllZCBhd2F5LiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggc3RhdGVtZW50IGNvcnJlY3RseSBtYXRjaGVzIGNvZWZmaWNpZW50IGFuZCBvcGVyYXRpb24gZm9yIHRoZSByZXBlYXRlZC1mYWN0b3IgdGVybXM/Iiwib3B0aW9ucyI6WyJBLiBcXCAoYV8wXFwpIGNvbWVzIGZyb20gb25lIGRlcml2YXRpdmU7IFxcIChhXzFcXCkgY29tZXMgZnJvbSBzdWJzdGl0dXRpb24iLCJCLiBcXCAoYV8xXFwpIGNvbWVzIGZyb20gZXZhbHVhdGluZyB0aGUgb3JpZ2luYWwgXFwgKEYoeClcXCkgYXQgXFwgKHggPSBcXGxhbWJkYVxcKSIsIkMuIFxcIChhXzFcXCkgY29tZXMgZnJvbSBkaWZmZXJlbnRpYXRpbmcgXFwgKCh4LVxcbGFtYmRhKV5yIEYoeClcXCkgb25jZSBhbmQgdGhlbiBzZXR0aW5nIFxcICh4ID0gXFxsYW1iZGFcXCkiLCJELiBFdmVyeSByZXBlYXRlZC1mYWN0b3IgY29lZmZpY2llbnQgaXMgZm91bmQgYnkgb3JkaW5hcnkgY292ZXItdXAgb25seSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6Ik9uY2UgdGhlIHJlcGVhdGVkIGZhY3RvciBpcyByZW1vdmVkIGJ5IG11bHRpcGxpY2F0aW9uLCBvbmUgZGVyaXZhdGl2ZSBvZiB0aGUgcmVzdWx0aW5nIGV4cHJlc3Npb24gZXZhbHVhdGVkIGF0IFxcICh4ID0gXFxsYW1iZGFcXCkgaXNvbGF0ZXMgXFwgKGFfMVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgb3JkZXIgaXMgcmV2ZXJzZWQ6IFxcIChhXzBcXCkgY29tZXMgZnJvbSBzdWJzdGl0dXRpb24gYWZ0ZXIgbXVsdGlwbHlpbmcsIG5vdCBmcm9tIGEgZGVyaXZhdGl2ZS4iLCJCIjoiRGlyZWN0bHkgZXZhbHVhdGluZyB0aGUgb3JpZ2luYWwgXFwgKEYoeClcXCkgYXQgXFwgKHggPSBcXGxhbWJkYVxcKSBpcyB1bmRlZmluZWQgYmVjYXVzZSBvZiB0aGUgcmVwZWF0ZWQgZGVub21pbmF0b3IgZmFjdG9yLiIsIkQiOiJPcmRpbmFyeSBjb3Zlci11cCB3b3JrcyBmb3IgdW5yZXBlYXRlZCBmYWN0b3JzOyB0aGUgcmVwZWF0ZWQtZmFjdG9yIGxhZGRlciByZXF1aXJlcyB0aGUgZGVyaXZhdGl2ZSBmb3JtdWxhLiJ9LCJoaW50IjoiUmVwZWF0ZWQtZmFjdG9yIGNvZWZmaWNpZW50cyBhcmUgZXh0cmFjdGVkIGFmdGVyIG11bHRpcGx5aW5nIGF3YXkgdGhlIHJlcGVhdGVkIGRlbm9taW5hdG9yLCB0aGVuIGRpZmZlcmVudGlhdGluZy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImV4YW1wbGVfYjEwX2FwcGxpY2F0aW9uIiwibGFiZWwiOiJBcHBseSB0aGUgbWV0aG9kIHRvIHRoZSByZXByZXNlbnRhdGl2ZSBleGFtcGxlIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJbiBFeGFtcGxlIEIuMTAsIHdoYXQgaXMgdGhlIGNvZWZmaWNpZW50IG9mIFxcIChcXGZyYWN7MX17eCsyfVxcKT8iLCJvcHRpb25zIjpbIkEuIDAiLCJCLiAxIiwiQy4gMiIsIkQuIDMiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgdW5yZXBlYXRlZCBmYWN0b3IgXFwgKCh4KzIpXFwpIHVzZXMgb3JkaW5hcnkgY292ZXItdXA6IGV2YWx1YXRpbmcgdGhlIG51bWVyYXRvciBkaXZpZGVkIGJ5IFxcICgoeCsxKV4zXFwpIGF0IFxcICh4ID0gLTJcXCkgZ2l2ZXMgXFwgKGsgPSAxXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBjb3Zlci11cCBldmFsdWF0aW9uIGRvZXMgbm90IGdpdmUgemVybyBoZXJlLiIsIkMiOiIyIGlzIHRoZSB2YWx1ZSBvZiBcXCAoYV8wXFwpLCB0aGUgY29lZmZpY2llbnQgb2YgXFwgKFxcZnJhY3sxfXsoeCsxKV4zfVxcKSwgbm90IFxcIChrXFwpLiIsIkQiOiIzIGlzIHRoZSB2YWx1ZSBvZiBcXCAoYV8yXFwpLCB0aGUgY29lZmZpY2llbnQgb2YgXFwgKFxcZnJhY3sxfXt4KzF9XFwpLCBub3QgXFwgKGtcXCkuIn0sImhpbnQiOiJUaGUgdW5yZXBlYXRlZCBmYWN0b3IgXFwgKCh4KzIpXFwpIGlzIGhhbmRsZWQgZmlyc3QgYnkgb3JkaW5hcnkgY292ZXItdXAgYXQgXFwgKHggPSAtMlxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3AzX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgXFwgKEYoeCkgPSBcXGZyYWN7NHheMysxNnheMisyM3grMTN9eyh4KzEpXjMoeCsyKX1cXCksIHdoaWNoIGNvZWZmaWNpZW50IGVxdWFscyB0aGUgdmFsdWUgb2J0YWluZWQgYWZ0ZXIgY29uY2VhbGluZyBcXCAoKHgrMSleM1xcKSBhbmQgdGhlbiBzdWJzdGl0dXRpbmcgXFwgKHggPSAtMVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcIChrXFwpIiwiQi4gXFwgKGFfMFxcKSIsIkMuIFxcIChhXzFcXCkiLCJELiBcXCAoYV8yXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiQWZ0ZXIgbXVsdGlwbHlpbmcgYXdheSB0aGUgcmVwZWF0ZWQgZmFjdG9yIFxcICgoeCsxKV4zXFwpLCBkaXJlY3Qgc3Vic3RpdHV0aW9uIGF0IHRoZSByZXBlYXRlZCByb290IFxcICh4ID0gLTFcXCkgZ2l2ZXMgXFwgKGFfMFxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJcXCAoa1xcKSBiZWxvbmdzIHRvIHRoZSB1bnJlcGVhdGVkIGZhY3RvciBcXCAoKHgrMilcXCkgYW5kIGlzIGZvdW5kIGF0IFxcICh4ID0gLTJcXCkuIiwiQyI6IlxcIChhXzFcXCkgcmVxdWlyZXMgb25lIGRlcml2YXRpdmUgb2YgXFwgKCh4KzEpXjMgRih4KVxcKSBiZWZvcmUgc3Vic3RpdHV0aW5nIGF0IFxcICh4ID0gLTFcXCkuIiwiRCI6IlxcIChhXzJcXCkgcmVxdWlyZXMgdGhlIHNlY29uZCBkZXJpdmF0aXZlIHdpdGggdGhlIFxcIChcXGZyYWN7MX17MiF9XFwpIGZhY3RvciBiZWZvcmUgc3Vic3RpdHV0aW5nLiJ9LCJoaW50IjoiVGhlIGZpcnN0IHJlcGVhdGVkLWZhY3RvciBjb2VmZmljaWVudCBcXCAoYV8wXFwpIGNvbWVzIGJlZm9yZSBhbnkgZGlmZmVyZW50aWF0aW9uIOKAlCBqdXN0IHN1YnN0aXR1dGUgYWZ0ZXIgbXVsdGlwbHlpbmcuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwM19xMyIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiV3JpdGUgdGhlIGZ1bGwgZmluYWwgcGFydGlhbC1mcmFjdGlvbiBleHBhbnNpb24gb2YgRXhhbXBsZSBCLjEwLiIsImlkZWFsX2Fuc3dlciI6IlxcIChGKHgpID0gXFxmcmFjezJ9eyh4KzEpXjN9ICsgXFxmcmFjezF9eyh4KzEpXjJ9ICsgXFxmcmFjezN9e3grMX0gKyBcXGZyYWN7MX17eCsyfVxcKSIsImdyYWRpbmdfcnVicmljIjpbIk11c3QgaW5jbHVkZSBhbGwgZm91ciB0ZXJtcyIsIk11c3QgaW5jbHVkZSB0aGUgZnVsbCByZXBlYXRlZC1mYWN0b3IgbGFkZGVyIGZvciBcXCAoKHgrMSleM1xcKTogdGVybXMgb3ZlciBcXCAoKHgrMSleM1xcKSwgXFwgKCh4KzEpXjJcXCksIGFuZCBcXCAoKHgrMSlcXCkiLCJNdXN0IGFzc2lnbiBjb2VmZmljaWVudHMgMiwgMSwgMywgYW5kIDEgY29ycmVjdGx5IHRvIHRoZSByZXNwZWN0aXZlIHRlcm1zIiwiTWlub3IgZm9ybWF0dGluZyBkaWZmZXJlbmNlcyBhcmUgYWNjZXB0YWJsZSBpZiBtYXRoZW1hdGljYWxseSBlcXVpdmFsZW50Il0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3MgdGhhdCB0aGUgc3R1ZGVudCBjYW4gYXNzZW1ibGUgdGhlIGZpbmlzaGVkIGFuc3dlciwgbm90IGp1c3QgaWRlbnRpZnkgb25lIGNvZWZmaWNpZW50IGF0IGEgdGltZS4iLCJoaW50IjoiVGhlcmUgc2hvdWxkIGJlIHRocmVlIHRlcm1zIGF0dGFjaGVkIHRvIFxcICgoeCsxKVxcKSBiZWNhdXNlIHRoZSBmYWN0b3IgaXMgY3ViZWQg4oCUIGNvdW50IHRoZW0gYmVmb3JlIHdyaXRpbmcgdGhlIGZpbmFsIGFuc3dlci4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19XX0=" style="display:none;"></div>%%KC_END%%

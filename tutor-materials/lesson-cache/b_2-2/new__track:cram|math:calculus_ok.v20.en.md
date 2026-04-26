%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IlRoaXMgc2VjdGlvbiBoYXMgbm8gdXNhYmxlIGV4dHJhY3RlZCB0ZXh0Ym9vayBmaWd1cmVzLCBidXQgdGhlIGNvcmUgcGF5b2ZmIGlzIGhpZ2hseSB2aXN1YWw6IHN0dWRlbnRzIG5lZWQgdG8gcmVjb2duaXplIGhvdyBjb3NpbmUgYW5kIHNpbmUgc3BsaXQgaW50byB0d28gZXhwb25lbnRpYWxzIHdpdGggb3Bwb3NpdGUgc2lnbnMgYW5kIGRpZmZlcmVudCBjb2VmZmljaWVudHMuIEEgY2xlYW4gZ2VuZXJhdGVkIGNvbXBhcmlzb24gZGlhZ3JhbSB3aWxsIHRlYWNoIHRoaXMgZmFzdGVyIHRoYW4gZGVuc2UgcHJvc2UuIiwiY3JhbSI6IlVzZSBvbmUgY29tcGFjdCB2aXN1YWwgdG8gbWFrZSB0aGUgcmV3cml0ZSBwYXR0ZXJuIGluc3RhbnRseSByZWNvZ25pemFibGU6IGNvc2luZSBpcyB0aGUgYXZlcmFnZSBvZiB0d28gZXhwb25lbnRpYWxzLCBzaW5lIGlzIHRoZSBkaWZmZXJlbmNlIGRpdmlkZWQgYnkgMmouIiwic3RhbmRhcmQiOiJVc2UgdGhlIHZpc3VhbCB0byBjb25uZWN0IEV1bGVyJ3MgZm9ybXVsYSB0byB0aGUgdHdvIGJveGVkIGlkZW50aXRpZXMgYW5kIG9uZSB3b3JrZWQgcmV3cml0ZSBleGFtcGxlLiIsInRvcF9zY29yZSI6IlVzZSB0aGUgdmlzdWFsIHRvIGV4cG9zZSBzaWduIHRyYXBzLCB0aGUgcm9sZSBvZiAxIG92ZXIgMmosIGFuZCB0aGUgZmFjdCB0aGF0IHNpbmUgY29tZXMgZnJvbSBzdWJ0cmFjdGlvbiB3aGlsZSBjb3NpbmUgY29tZXMgZnJvbSBhZGRpdGlvbi4ifQ==" style="display:none;"></div>%%KC_END%%
# B.2-2 Sinusoids in Terms of Exponentials

> **Section Objective:** Memorize the exponential forms of cosine and sine, recognize them instantly in exam problems, and avoid the classic sign and coefficient traps.

---

A common test move is to give you \(\cos\phi\) or \(\sin\phi\) and ask you to rewrite it using exponentials, or to spot which exponential combination equals a sinusoid. Both tasks rely on two Euler-form identities:

$$e^{j\phi} = \cos\phi + j\sin\phi, \qquad e^{-j\phi} = \cos\phi - j\sin\phi$$

The fastest recognition rule: **cosine comes from adding the pair** (the \(j\sin\phi\) terms cancel), and **sine comes from subtracting the pair** (the \(\cos\phi\) terms cancel). Memorize both results exactly.

#### Main Trap

For sine, the denominator is \(2j\), not \(2\). Forgetting the \(j\) — or flipping a sign — is the most common error on this topic.

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="exam_pattern_anchor" data-visual-use-b64="eyJjcmFtIjoiVXNlIHRoaXMgYXMgdGhlIG1lbW9yaXphdGlvbiBjYXJkOiBhZGQgZm9yIGNvc2luZSwgc3VidHJhY3QgYW5kIGRpdmlkZSBieSAyaiBmb3Igc2luZS4iLCJzdGFuZGFyZCI6IlVzZSB0aGlzIHRvIGNvbm5lY3QgRXVsZXIncyBmb3JtdWxhIHRvIHRoZSBmaW5hbCBpZGVudGl0aWVzIHRocm91Z2ggb25lIGNsZWFuIHZpc3VhbCBwYXRoLiIsInRvcF9zY29yZSI6IlVzZSB0aGlzIHRvIGhpZ2hsaWdodCBjb2VmZmljaWVudCBhbmQgc2lnbiB0cmFwcywgZXNwZWNpYWxseSB0aGUgbWludXMgc2lnbiBhbmQgMSBvdmVyIDJqIGluIHNpbmUuIn0=" style="display:none;"></div>%%KC_END%%
*🎨 Euler's two identities split into the cosine rule (add, divide by 2) and the sine rule (subtract, divide by 2j). The red box marks the most common exam trap.*
![Illustration](/generated/gptimage2-1777216830575-3941.png)

$$e^{j\phi} = \cos\phi + j\sin\phi, \qquad e^{-j\phi} = \cos\phi - j\sin\phi$$
*These are the two Euler-form identities from which all cosine and sine exponential rewrite rules on exams are derived.*

$$\cos\phi = \frac{e^{j\phi}+e^{-j\phi}}{2}, \qquad \sin\phi = \frac{e^{j\phi}-e^{-j\phi}}{2j}$$
*Memorize both of these exactly. The critical difference: cosine uses **addition** and divides by \(2\), while sine uses **subtraction** and divides by \(2j\) — the \(j\) in the denominator is not optional and is the source of the most frequent exam error.*

## 1. Fast Rewrite Pattern

When an exam asks you to convert between sinusoids and exponentials, follow this four-step method:

1. **Identify the target** — is it \(\cos\phi\) or \(\sin\phi\)?
2. **Write the two exponentials** — \(e^{j\phi}\) and \(e^{-j\phi}\) with the correct sign on the exponent.
3. **Apply the right rule** — use \(\frac{e^{j\phi}+e^{-j\phi}}{2}\) for cosine, or \(\frac{e^{j\phi}-e^{-j\phi}}{2j}\) for sine.
4. **Keep parentheses** — especially when the argument is a compound expression like \(\omega_0 t + \theta\), write \(e^{j(\omega_0 t+\theta)}\) to avoid sign errors.

### WORKED EXAMPLE

Rewrite \(\cos(\omega_0 t + \theta)\) and \(\sin(\omega_0 t + \theta)\) in exponential form:

$$\cos(\omega_0 t + \theta) = \frac{e^{j(\omega_0 t+\theta)}+e^{-j(\omega_0 t+\theta)}}{2}$$

$$\sin(\omega_0 t + \theta) = \frac{e^{j(\omega_0 t+\theta)}-e^{-j(\omega_0 t+\theta)}}{2j}$$

These identities appear inside larger signal expressions constantly — recognize the pattern on sight.

> **Do not re-derive this during the test unless you forget the formula.** The derivation costs time; the memorized form costs nothing.

## 2. Common Traps

These are the highest-frequency mistakes on this topic:

- **Using \(+\) instead of \(-\) for sine.** Sine requires subtraction: \(e^{j\phi} - e^{-j\phi}\). Using addition gives cosine.
- **Forgetting the factor \(\frac{1}{2j}\).** The denominator for sine is \(2j\), not \(2\). Dropping the \(j\) produces a result that is off by a factor of \(j\).
- **Dropping the negative-exponent term.** Both \(e^{j\phi}\) and \(e^{-j\phi}\) must appear. Keeping only one term is not a valid sinusoid identity.
- **Treating cosine and sine as structurally identical.** They are not — one uses addition, the other subtraction, and the denominators differ.

### RECOGNITION RULE

If you see a **symmetric sum** \(e^{j\phi} + e^{-j\phi}\), think **cosine**. If you see an **antisymmetric difference** \(e^{j\phi} - e^{-j\phi}\), think **sine**.

#### Micro-Check Under Pressure

If your expression for \(\sin\phi\) does **not** contain \(j\) in the denominator, stop and recheck.

---
**📌 Key Takeaways**
- Memorize now: \(\cos\phi = (e^{j\phi}+e^{-j\phi})/2\) and \(\sin\phi = (e^{j\phi}-e^{-j\phi})/(2j)\).
- Pattern rule: symmetric sum of opposite exponentials means cosine; antisymmetric difference means sine.
- Sine trap: the denominator is \(2j\), not \(2\) — missing the \(j\) is the most common error.

*In the next section we will move from these exponential forms to sketching signals.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NSwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo0LCJtYXgiOjZ9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImV1bGVyX3RvX2Nvc2luZV9zaW5lIiwibGFiZWwiOiJNZW1vcml6ZWQgZXhwb25lbnRpYWwgZm9ybXMgb2YgY29zaW5lIGFuZCBzaW5lIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBleHByZXNzaW9uIGlzIGVxdWFsIHRvIFxcKFxcY29zXFxwaGlcXCk/Iiwib3B0aW9ucyI6WyJBLiBcXChcXGRmcmFje2Vee2pcXHBoaX0gLSBlXnstalxccGhpfX17Mn1cXCkiLCJCLiBcXChcXGRmcmFje2Vee2pcXHBoaX0gKyBlXnstalxccGhpfX17Mn1cXCkiLCJDLiBcXChcXGRmcmFje2Vee2pcXHBoaX0gKyBlXnstalxccGhpfX17Mmp9XFwpIiwiRC4gXFwoXFxkZnJhY3tlXntqXFxwaGl9IC0gZV57LWpcXHBoaX19ezJqXjJ9XFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiQ29zaW5lIGlzIG9idGFpbmVkIGJ5IGFkZGluZyB0aGUgdHdvIEV1bGVyIGV4cHJlc3Npb25zIGFuZCBkaXZpZGluZyBieSBcXCgyXFwpLiBBZGRpbmcgXFwoZV57alxccGhpfSArIGVeey1qXFxwaGl9XFwpIGNhbmNlbHMgdGhlIFxcKGpcXHNpblxccGhpXFwpIHRlcm1zIGFuZCBsZWF2ZXMgXFwoMlxcY29zXFxwaGlcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiU3VidHJhY3Rpb24gaXMgdGhlIHNpbmUgcGF0dGVybiwgbm90IHRoZSBjb3NpbmUgcGF0dGVybiDigJQgdGhpcyBnaXZlcyBcXCgyalxcc2luXFxwaGlcXCkuIiwiQyI6IlRoZSBkZW5vbWluYXRvciBcXCgyalxcKSBiZWxvbmdzIHRvIHRoZSBzaW5lIGlkZW50aXR5LCBub3QgY29zaW5lLiIsIkQiOiJUaGlzIGlzIGFuIHVubmVjZXNzYXJ5IGFuZCBtaXNsZWFkaW5nIG1hbmlwdWxhdGlvbjsgdGhlIHN0YW5kYXJkIGNvc2luZSBpZGVudGl0eSBpcyBzaW1wbHkgdGhlIGF2ZXJhZ2Ugb2YgdGhlIHR3byBleHBvbmVudGlhbHMuIn0sImhpbnQiOiJDb3NpbmUgY29tZXMgZnJvbSB0aGUgc3ltbWV0cmljIHN1bSDigJQgYWRkaW5nIHRoZSB0d28gZXhwb25lbnRpYWxzIGNhbmNlbHMgdGhlIGltYWdpbmFyeSBwYXJ0cy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIGV4cHJlc3Npb24gaXMgZXF1YWwgdG8gXFwoXFxzaW5cXHBoaVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKFxcZGZyYWN7ZV57alxccGhpfSAtIGVeey1qXFxwaGl9fXsyan1cXCkiLCJCLiBcXChcXGRmcmFje2Vee2pcXHBoaX0gKyBlXnstalxccGhpfX17Mn1cXCkiLCJDLiBcXChcXGRmcmFje2Vee2pcXHBoaX0gLSBlXnstalxccGhpfX17Mn1cXCkiLCJELiBcXChcXGRmcmFje2Vee2pcXHBoaX0gKyBlXnstalxccGhpfX17Mmp9XFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiU2luZSBpcyBvYnRhaW5lZCBieSBzdWJ0cmFjdGluZyB0aGUgdHdvIEV1bGVyIGV4cHJlc3Npb25zIGFuZCBkaXZpZGluZyBieSBcXCgyalxcKS4gVGhlIHN1YnRyYWN0aW9uIGNhbmNlbHMgdGhlIFxcKFxcY29zXFxwaGlcXCkgdGVybXMsIGxlYXZpbmcgXFwoMmpcXHNpblxccGhpXFwpLCBhbmQgZGl2aWRpbmcgYnkgXFwoMmpcXCkgaXNvbGF0ZXMgXFwoXFxzaW5cXHBoaVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIGlzIHRoZSBjb3NpbmUgaWRlbnRpdHkg4oCUIGl0IHVzZXMgYWRkaXRpb24sIG5vdCBzdWJ0cmFjdGlvbi4iLCJDIjoiSXQgaGFzIHRoZSBjb3JyZWN0IHN1YnRyYWN0aW9uIHBhdHRlcm4gYnV0IGlzIG1pc3NpbmcgdGhlIGNydWNpYWwgXFwoXFxmcmFjezF9e2p9XFwpIGZhY3RvciBpbiB0aGUgZGVub21pbmF0b3IuIiwiRCI6IlNpbmUgdXNlcyBzdWJ0cmFjdGlvbiwgbm90IGFkZGl0aW9uOyB0aGlzIGV4cHJlc3Npb24gZG9lcyBub3Qgc2ltcGxpZnkgdG8gXFwoXFxzaW5cXHBoaVxcKS4ifSwiaGludCI6IkZvciBzaW5lLCByZW1lbWJlciBib3RoIHN1YnRyYWN0aW9uIGluIHRoZSBudW1lcmF0b3IgYW5kIFxcKDJqXFwpIGluIHRoZSBkZW5vbWluYXRvci4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6InBhdHRlcm5fcmVjb2duaXRpb24iLCJsYWJlbCI6IlJlY29nbml6aW5nIGNvc2luZS10eXBlIGFuZCBzaW5lLXR5cGUgZXhwb25lbnRpYWwgY29tYmluYXRpb25zIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIHN0dWRlbnQgc2VlcyBcXChlXntqXFxwaGl9ICsgZV57LWpcXHBoaX1cXCkuIFdoYXQgc2hvdWxkIHRoZXkgcmVjb2duaXplIGltbWVkaWF0ZWx5PyIsIm9wdGlvbnMiOlsiQS4gSXQgaXMgcHJvcG9ydGlvbmFsIHRvIFxcKFxcc2luXFxwaGlcXCkiLCJCLiBJdCBpcyBwcm9wb3J0aW9uYWwgdG8gXFwoXFxjb3NcXHBoaVxcKSIsIkMuIEl0IGlzIHplcm8gZm9yIGFsbCBcXChcXHBoaVxcKSIsIkQuIEl0IGlzIHB1cmVseSBpbWFnaW5hcnkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgc3ltbWV0cmljIHN1bSBvZiBvcHBvc2l0ZSBleHBvbmVudHMgY29ycmVzcG9uZHMgdG8gY29zaW5lOiBcXChlXntqXFxwaGl9ICsgZV57LWpcXHBoaX0gPSAyXFxjb3NcXHBoaVxcKS4gVGhlIGltYWdpbmFyeSBwYXJ0cyBjYW5jZWwgaW4gdGhlIGFkZGl0aW9uLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlNpbmUgY29tZXMgZnJvbSB0aGUgYW50aXN5bW1ldHJpYyBkaWZmZXJlbmNlIFxcKGVee2pcXHBoaX0gLSBlXnstalxccGhpfVxcKSwgbm90IHRoZSBzdW0uIiwiQyI6IlRoZSBzdW0gZXF1YWxzIFxcKDJcXGNvc1xccGhpXFwpLCB3aGljaCBpcyBnZW5lcmFsbHkgbm90IHplcm8uIiwiRCI6IlRoZSBzdW0gaXMgcmVhbC12YWx1ZWQgKGVxdWFsIHRvIFxcKDJcXGNvc1xccGhpXFwpKSwgbm90IHB1cmVseSBpbWFnaW5hcnkuIn0sImhpbnQiOiJTeW1tZXRyaWMgc3VtIG9mIG9wcG9zaXRlLXNpZ24gZXhwb25lbnRzIGFsd2F5cyBtZWFucyBjb3NpbmUuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImdlbmVyYXRlZF9pbWFnZSIsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6InRyYXBfZGV0ZWN0aW9uIiwibGFiZWwiOiJEZXRlY3Rpbmcgc2lnbiBhbmQgY29lZmZpY2llbnQgbWlzdGFrZXMiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggc3R1ZGVudCBmb3JtdWxhIGlzIHdyb25nPyIsIm9wdGlvbnMiOlsiQS4gXFwoXFxjb3NcXHBoaSA9IFxcZGZyYWN7ZV57alxccGhpfSArIGVeey1qXFxwaGl9fXsyfVxcKSIsIkIuIFxcKFxcc2luXFxwaGkgPSBcXGRmcmFje2Vee2pcXHBoaX0gLSBlXnstalxccGhpfX17Mmp9XFwpIiwiQy4gXFwoXFxzaW5cXHBoaSA9IFxcZGZyYWN7ZV57alxccGhpfSAtIGVeey1qXFxwaGl9fXsyfVxcKSIsIkQuIFxcKGVeey1qXFxwaGl9ID0gXFxjb3NcXHBoaSAtIGpcXHNpblxccGhpXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiVGhlIGZvcm11bGEgZm9yIHNpbmUgbXVzdCBpbmNsdWRlIGRpdmlzaW9uIGJ5IFxcKDJqXFwpLCBub3QganVzdCBcXCgyXFwpLiBEaXZpZGluZyBieSBcXCgyXFwpIGdpdmVzIFxcKGpcXHNpblxccGhpXFwpLCBub3QgXFwoXFxzaW5cXHBoaVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIGlzIHRoZSBjb3JyZWN0IGNvc2luZSBpZGVudGl0eS4iLCJCIjoiVGhpcyBpcyB0aGUgY29ycmVjdCBzaW5lIGlkZW50aXR5LiIsIkQiOiJUaGlzIGlzIHRoZSBjb3JyZWN0IG5lZ2F0aXZlLWFuZ2xlIEV1bGVyIGZvcm0uIn0sImhpbnQiOiJJZiB0aGUgc2luZSBmb3JtdWxhIGhhcyBubyBcXChqXFwpIGluIHRoZSBkZW5vbWluYXRvciwgaXQgaXMgd3JvbmcuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AzX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJFeHBsYWluIGluIG9uZSBvciB0d28gc2VudGVuY2VzIHdoeSBcXChlXntqXFxwaGl9ICsgZV57LWpcXHBoaX1cXCkgY2Fubm90IHJlcHJlc2VudCBcXChcXHNpblxccGhpXFwpIGJ5IGl0c2VsZi4iLCJpZGVhbF9hbnN3ZXIiOiJCZWNhdXNlIGFkZGluZyB0aGUgdHdvIEV1bGVyIGlkZW50aXRpZXMgY2FuY2VscyB0aGUgXFwoalxcc2luXFxwaGlcXCkgdGVybXMgYW5kIGxlYXZlcyBcXCgyXFxjb3NcXHBoaVxcKS4gU2luZSBjb21lcyBmcm9tIHRoZSBkaWZmZXJlbmNlIFxcKGVee2pcXHBoaX0gLSBlXnstalxccGhpfVxcKSwgbm90IHRoZSBzdW0uIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBzdGF0ZSB0aGF0IHRoZSBcXChqXFxzaW5cXHBoaVxcKSB0ZXJtcyBjYW5jZWwgd2hlbiB0aGUgdHdvIEV1bGVyIGlkZW50aXRpZXMgYXJlIGFkZGVkIiwiTXVzdCBzdGF0ZSB0aGF0IHRoZSByZXN1bHQgb2YgdGhlIHN1bSBpcyBcXCgyXFxjb3NcXHBoaVxcKSBvciBwcm9wb3J0aW9uYWwgdG8gY29zaW5lIiwiTXVzdCBleHBsaWNpdGx5IGNvbnRyYXN0IHRoZSBzdW0gKGNvc2luZSkgd2l0aCB0aGUgZGlmZmVyZW5jZSAoc2luZSkiXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB3aGV0aGVyIHRoZSBzdHVkZW50IHVuZGVyc3RhbmRzIHRoZSBhbGdlYnJhaWMgc3RydWN0dXJlIHJhdGhlciB0aGFuIG9ubHkgbWVtb3JpemluZyBhIGZvcm11bGEgc2hhcGUuIiwiaGludCI6IldyaXRlIG91dCBib3RoIEV1bGVyIGlkZW50aXRpZXMgXFwoZV57alxccGhpfSA9IFxcY29zXFxwaGkgKyBqXFxzaW5cXHBoaVxcKSBhbmQgXFwoZV57LWpcXHBoaX0gPSBcXGNvc1xccGhpIC0galxcc2luXFxwaGlcXCksIHRoZW4gYWRkIHRoZW0gdGVybSBieSB0ZXJtIGFuZCBvYnNlcnZlIHdoYXQgY2FuY2Vscy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX1dfQ==" style="display:none;"></div>%%KC_END%%

import GoBackBtn from '../components/GoBackBtn'

export default function IntellectualProperty() {
  return (
    <section className='pt-20 flex flex-col gap-7 items-center'>
        <h1 className='text-4xl font-subFont text-center'>
            Intellectual Property Notice
        </h1>
        <div className='px-7'>
            <h2 className='text-2xl underline'>
                MIT License
            </h2>
            <div className='flex flex-col gap-7 max-w-2xl'>
                <h3 className='text-xl underline'>
                    Copyright (c) 2023 Bingler Lee
                </h3>

                <p className='lg:text-lg'>
                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the &quot;Software&quot;), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:
                    The above copyright notice and this permission notice shall be included in all
                    copies or substantial portions of the Software.
                    <br /> <br />
                    THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.
                </p>
            </div>
        </div>
        <GoBackBtn />
    </section>
  )
}

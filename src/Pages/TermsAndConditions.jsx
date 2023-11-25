import GoBackBtn from '../components/GoBackBtn'
export default function TermsAndConditions() {

    return (
        <section className='pt-20 flex flex-col items-center'>
            <h1 className='font-subFont text-4xl underline pb-10 lg:pb-16'>
                Terms and Conditions
            </h1>
            <div className='max-w-2xl flex flex-col gap-7 px-7 pb-7'>
                <h2 className='text-2xl underline'>
                    Open Source Software
                </h2>
                <p className='lg:text-lg'>
                    The Software product may include certain open source components that are subject to open source licenses (“Open Source Software”), in which case, the embedded Open Source Software is owned by a third party.
                    The Open Source Software is not subject to the terms and conditions of this XXXX.
                    Instead, each item of Open Source Software is licensed under its applicable license terms which accompanies such Open Source Software.
                    Nothing in this XXXX limits your rights under, nor grants you rights that supersede, the terms and conditions of any applicable license terms for the Open Source Software.
                    Any fees charged by GC in connection with the SOFTWARE, do not apply to the Open Source Software for which fees may not be charged under the applicable license terms.
                    The terms and conditions of the applicable license for the Open Source Software are available on the LICENSE.txt file, which is provided with the SOFTWARE.
                </p>
            </div>
            <GoBackBtn />
        </section>
    )
}
